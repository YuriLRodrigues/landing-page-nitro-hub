/** Dados estruturados (schema.org) para buscadores. O `<` é escapado para o JSON não fechar a tag `<script>`. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
