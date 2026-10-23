/**
 * Guias em /guias/[slug]: conteúdo para quem procura "desempenho Windows 11/10", "aumentar FPS" e "tela esticada VALORANT".
 * Os textos usam a marcação de `lib/rich-text` (**negrito**, `código`, [link](url)). Caminhos do Windows conferidos no
 * Windows 11 24H2 e no Windows 10 22H2; os do app, no NITRO HUB v0.21.
 */
export type GuideBlock = { kind: "p"; text: string } | { kind: "list"; items: string[] } | { kind: "steps"; items: string[] } | { kind: "note"; title: string; text: string };

export type GuideSection = { id: string; title: string; blocks: GuideBlock[] };

export type Guide = {
  slug: string;
  /** H1 da página. */
  title: string;
  /** Título da aba e do Google (o layout acrescenta "· NITRO HUB"). */
  metaTitle: string;
  /** Nome curto, para cartões e trilha de navegação. */
  shortTitle: string;
  description: string;
  keywords: string[];
  published: string;
  updated: string;
  intro: string;
  sections: GuideSection[];
};

export const GUIDES: Guide[] = [
  {
    slug: "melhorar-desempenho-windows",
    title: "Como melhorar o desempenho do PC no Windows 11 e 10",
    metaTitle: "Como melhorar o desempenho do PC no Windows 11 e 10 (jogos)",
    shortTitle: "Desempenho no Windows 11 e 10",
    description:
      "Passo a passo para deixar o Windows 11 e o Windows 10 mais rápidos para jogar: energia, inicialização, Modo de Jogo, opções gráficas, driver, temperatura e espaço em disco.",
    keywords: ["melhorar desempenho do PC", "desempenho Windows 11", "desempenho Windows 10", "otimizar Windows 11", "otimizar Windows 10", "PC lento", "performance Windows"],
    published: "2026-10-23",
    updated: "2026-10-23",
    intro:
      "Não existe ajuste mágico que dobra o FPS. O que deixa o PC mais rápido é tirar o que está atrapalhando: programas em segundo plano, energia no modo econômico, gravações ligadas sem você saber, driver velho e temperatura alta. Abaixo, cada passo do jeito manual, no Windows 11 e no Windows 10, e como o **NITRO HUB** faz o mesmo com botão de desfazer.",
    sections: [
      {
        id: "o-que-esta-pesando",
        title: "1. Veja o que está pesando",
        blocks: [
          {
            kind: "p",
            text: "Abra o **Gerenciador de Tarefas** (`Ctrl + Shift + Esc`), vá em **Processos** e clique nas colunas **CPU** e **Memória** para ordenar. Navegador com muitas abas, launchers abertos à toa e programas de RGB costumam aparecer no topo.",
          },
          {
            kind: "p",
            text: "No NITRO HUB, os **Sensores** mostram uso, temperatura e clock de cada peça, e o **detector de gargalo** diz se o jogo está limitado pela placa de vídeo, pelo processador, pela memória ou pela temperatura.",
          },
        ],
      },
      {
        id: "energia",
        title: "2. Use o modo de energia de desempenho",
        blocks: [
          {
            kind: "list",
            items: [
              "**Windows 11:** Configurações › Sistema › Energia e bateria › Modo de energia › **Melhor desempenho**.",
              "**Windows 10:** Painel de Controle › Hardware e Sons › Opções de Energia › **Alto desempenho** (no notebook, também dá para arrastar o controle do ícone da bateria até Melhor desempenho).",
              "**Notebook:** jogue na tomada. Na bateria, o processador e a placa de vídeo rodam bem mais devagar.",
            ],
          },
          {
            kind: "p",
            text: "No NITRO HUB, o **Modo jogo** liga o plano Alto desempenho só enquanto o jogo está aberto e volta ao anterior quando ele fecha. Em notebooks Dell e Alienware, também troca o modo térmico.",
          },
        ],
      },
      {
        id: "inicializacao",
        title: "3. Corte o que abre com o Windows",
        blocks: [
          {
            kind: "list",
            items: [
              "**Windows 11:** Gerenciador de Tarefas › **Aplicativos de inicialização** (ou Configurações › Aplicativos › Inicialização).",
              "**Windows 10:** Gerenciador de Tarefas › aba **Inicializar**.",
            ],
          },
          {
            kind: "p",
            text: "Desative o que você não usa logo ao ligar o PC. Driver de áudio, de touchpad e o antivírus devem ficar. No NITRO HUB, a ferramenta **Inicialização** lista o que abre pelo registro e pela pasta Inicializar e deixa desativar ou remover, com opção de desfazer.",
          },
        ],
      },
      {
        id: "modo-de-jogo",
        title: "4. Ligue o Modo de Jogo e desligue a gravação em segundo plano",
        blocks: [
          {
            kind: "list",
            items: [
              "**Modo de Jogo (11 e 10):** Configurações › Jogos › **Modo de Jogo** › ligado. Ele dá prioridade ao jogo e evita que o Windows Update instale drivers ou peça para reiniciar durante a partida.",
              "**Gravação do Game Bar, Windows 11:** Configurações › Jogos › Capturas › desligue **Gravar o que aconteceu**.",
              "**Gravação do Game Bar, Windows 10:** Configurações › Jogos › Capturas › desligue **Gravar em segundo plano enquanto estou jogando**.",
            ],
          },
          {
            kind: "p",
            text: "A gravação em segundo plano guarda os últimos minutos de jogo o tempo todo e custa desempenho. O **NITRO OTIMIZA** tem um interruptor para cada um desses itens e o botão **Restaurar originais**.",
          },
        ],
      },
      {
        id: "graficos-do-windows",
        title: "5. Confira as opções gráficas do Windows",
        blocks: [
          {
            kind: "p",
            text: "No **Windows 11**: Configurações › Sistema › Tela › **Elementos gráficos** › configurações gráficas padrão. No **Windows 10** (versão 2004 ou mais nova): Configurações › Sistema › Tela › **Configurações de gráficos**.",
          },
          {
            kind: "list",
            items: [
              "**Agendamento de GPU acelerado por hardware (HAGS):** costuma ajudar em placas recentes e é exigido pela geração de quadros da NVIDIA. Precisa reiniciar.",
              "**Otimizações para jogos em janela** (só no Windows 11): melhora a latência de jogos DirectX 10 e 11 em janela sem borda.",
              "**Taxa de atualização variável:** deixe ligada se o monitor tem G-SYNC ou FreeSync.",
              "**GPU preferida por app:** em notebooks com duas placas, adicione o jogo e escolha **Alto desempenho** para ele usar a placa dedicada.",
            ],
          },
          {
            kind: "p",
            text: "A página **Ajustes da placa** do NITRO HUB mostra o estado atual de cada uma dessas opções ao lado do recomendado, além das opções do driver (na NVIDIA, lidas do próprio driver; na AMD e na Intel, com o caminho no app do fabricante), sem mudar nada sozinha.",
          },
        ],
      },
      {
        id: "taxa-de-atualizacao",
        title: "6. Use toda a taxa de atualização do monitor",
        blocks: [
          {
            kind: "p",
            text: "É comum comprar um monitor de 144 Hz e o Windows continuar em 60 Hz. No **Windows 11**: Configurações › Sistema › Tela › Tela avançada › **Escolher uma taxa de atualização**. No **Windows 10**: Configurações › Sistema › Tela › **Configurações de vídeo avançadas**. Use também um cabo que aguente essa taxa (DisplayPort ou HDMI 2.0 ou mais novo).",
          },
        ],
      },
      {
        id: "driver",
        title: "7. Atualize o driver da placa de vídeo",
        blocks: [
          {
            kind: "p",
            text: "Pegue o driver no site do fabricante ou no app dele: **NVIDIA App**, **AMD Software: Adrenalin Edition** ou **Intel Graphics Software**. Drivers novos trazem correções para jogos recentes. Se um jogo piorar depois de atualizar, voltar para a versão anterior também é uma opção.",
          },
        ],
      },
      {
        id: "temperatura",
        title: "8. Controle a temperatura",
        blocks: [
          {
            kind: "p",
            text: "Quando a CPU ou a GPU esquentam demais, elas baixam o clock sozinhas (thermal throttling) e o FPS cai no meio da partida. Limpe a poeira, deixe o notebook numa superfície lisa e confira se as ventoinhas giram.",
          },
          {
            kind: "p",
            text: "O NITRO HUB avisa quando a CPU ou a GPU passam do limite ou quando a GPU reduz o clock, e mostra as temperaturas no overlay, por cima do jogo.",
          },
        ],
      },
      {
        id: "espaco",
        title: "9. Deixe espaço livre no disco",
        blocks: [
          {
            kind: "p",
            text: "Com o SSD quase cheio, ele fica mais lento. Mantenha pelo menos 10% a 15% livre. No Windows 11 e no 10: Configurações › Sistema › Armazenamento › **Arquivos temporários**. No NITRO HUB, **Liberar espaço** mostra o tamanho de cada coisa antes de apagar: temporários, caches de shader e Lixeira.",
          },
        ],
      },
      {
        id: "com-o-nitro-hub",
        title: "Tudo isso com um clique",
        blocks: [
          {
            kind: "p",
            text: 'O NITRO HUB é grátis, em português e junta esses passos num app só. Cada ajuste tem interruptor, explicação e caminho de volta. Defender, VBS, UAC e Windows Update ficam como estão: nada de "otimização" que desliga a segurança do PC.',
          },
          {
            kind: "steps",
            items: [
              "Baixe e instale o NITRO HUB.",
              "Abra o **NITRO OTIMIZA** e ligue o que fizer sentido para você.",
              "Adicione seus jogos no **Modo jogo**: ao clicar em JOGAR, ele prepara o PC; ao fechar o jogo, desfaz tudo.",
              "Jogue com o **overlay** ligado e compare o FPS e o 1% low antes e depois.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "aumentar-fps",
    title: "Como aumentar o FPS nos jogos no PC",
    metaTitle: "Como aumentar o FPS nos jogos no PC (Windows 11 e 10)",
    shortTitle: "Aumentar o FPS",
    description:
      "Meça o FPS e o 1% low, descubra se o limite é a placa de vídeo ou o processador e ajuste o que mais pesa: gráficos, DLSS e FSR, limite de FPS, temperatura e Windows.",
    keywords: ["aumentar FPS", "como aumentar o FPS", "FPS baixo", "1% low", "gargalo CPU GPU", "DLSS", "FSR", "otimizar PC para jogos"],
    published: "2026-10-23",
    updated: "2026-10-23",
    intro:
      "Antes de mudar qualquer coisa, descubra **o que está segurando o FPS**. Baixar o gráfico não ajuda se o limite é o processador, e fechar programas não ajuda se a placa de vídeo já está no máximo. Este guia segue a ordem que dá resultado: medir, achar o gargalo e só então ajustar.",
    sections: [
      {
        id: "medir",
        title: "1. Meça o FPS e o 1% low",
        blocks: [
          {
            kind: "p",
            text: "O **FPS médio** diz quão rápido o jogo roda; o **1% low** (a média dos 1% piores quadros) diz quão liso ele é. Um jogo a 140 FPS com 1% low de 40 dá engasgos que o FPS médio esconde.",
          },
          {
            kind: "p",
            text: "Compare sempre no mesmo lugar do jogo e pelo mesmo tempo. O overlay do NITRO HUB mostra FPS, frametime, 1% e 0,1% low e um gráfico, sem injetar nada no jogo. Ao fechar o jogo, a sessão fica gravada para comparar depois.",
          },
        ],
      },
      {
        id: "gargalo",
        title: "2. Descubra o gargalo",
        blocks: [
          {
            kind: "list",
            items: [
              "**Placa de vídeo perto de 95–100% de uso:** o limite é a GPU. Baixar gráficos, resolução ou usar DLSS/FSR aumenta o FPS.",
              "**Placa de vídeo bem abaixo disso e FPS baixo:** o limite é o processador (às vezes um único núcleo no máximo), a memória ou uma trava de FPS. Baixar gráficos quase não muda nada; fechar programas em segundo plano e desligar opções que pesam no processador, sim.",
              "**FPS travado num número redondo (60, 144...):** é V-Sync, limite de FPS do jogo ou do driver.",
              "**FPS que cai depois de alguns minutos:** temperatura. A CPU ou a GPU estão baixando o clock para esfriar.",
            ],
          },
          {
            kind: "p",
            text: "O **detector de gargalo** do NITRO HUB faz essa leitura sozinho, durante o jogo, e diz qual dos casos é o seu.",
          },
        ],
      },
      {
        id: "graficos",
        title: "3. Ajuste os gráficos que mais pesam",
        blocks: [
          {
            kind: "p",
            text: "Na maioria dos jogos, estes são os itens que mais custam FPS na placa de vídeo, do mais pesado para o mais leve:",
          },
          {
            kind: "list",
            items: [
              "**Ray tracing** (reflexos, sombras e iluminação).",
              "**Escala de renderização** acima de 100%.",
              "**Sombras**, **iluminação volumétrica** (névoa, nuvens) e **oclusão de ambiente**.",
              "**Reflexos** e **anti-aliasing** pesado (MSAA).",
            ],
          },
          {
            kind: "p",
            text: "**Texturas** quase não custam FPS enquanto couberem na memória da placa (VRAM); se a VRAM encher, o jogo engasga. **Distância de visão** e **quantidade de NPCs ou objetos** pesam mais no processador.",
          },
        ],
      },
      {
        id: "upscaling",
        title: "4. Use DLSS, FSR ou XeSS",
        blocks: [
          {
            kind: "p",
            text: "O upscaling renderiza o jogo numa resolução menor e reconstrói a imagem. Em **Qualidade** ou **Equilibrado**, o ganho costuma ser grande e a perda de nitidez, pequena.",
          },
          {
            kind: "list",
            items: [
              "**DLSS:** placas NVIDIA RTX.",
              "**FSR:** funciona em praticamente qualquer placa (NVIDIA, AMD e Intel).",
              "**XeSS:** melhor em placas Intel Arc, mas roda nas outras.",
            ],
          },
          {
            kind: "note",
            title: "Geração de quadros",
            text: "A geração de quadros (DLSS Frame Generation, FSR Frame Generation) aumenta o FPS exibido, mas acrescenta atraso. Funciona melhor quando o jogo já passa de uns 60 FPS sem ela e é pior para jogos competitivos.",
          },
        ],
      },
      {
        id: "limite-e-latencia",
        title: "5. Limite de FPS e latência",
        blocks: [
          {
            kind: "list",
            items: [
              "Travar o FPS um pouco abaixo do que o PC consegue deixa o frametime mais estável e o PC mais frio.",
              "Com **G-SYNC** ou **FreeSync**, um limite uns 3 FPS abaixo da taxa do monitor evita o atraso do V-Sync.",
              "Em jogos competitivos, ligue o **NVIDIA Reflex** do jogo ou o **AMD Anti-Lag** do driver.",
            ],
          },
        ],
      },
      {
        id: "windows-e-energia",
        title: "6. Windows, energia e temperatura",
        blocks: [
          {
            kind: "p",
            text: "Modo de energia de desempenho, programas em segundo plano fechados, gravação do Game Bar desligada, driver atualizado e temperatura sob controle valem para qualquer jogo. O passo a passo está em [Como melhorar o desempenho do PC no Windows 11 e 10](/guias/melhorar-desempenho-windows).",
          },
          {
            kind: "p",
            text: "O **Modo jogo** do NITRO HUB faz a parte do Windows sozinho ao clicar em JOGAR — fecha o que pesa, limpa a RAM e os temporários e liga o Alto desempenho — e desfaz tudo quando o jogo fecha.",
          },
        ],
      },
      {
        id: "overclock",
        title: "7. Overclock, por último e com cuidado",
        blocks: [
          {
            kind: "p",
            text: "O overclock da placa de vídeo costuma render poucos por cento de FPS, e cada placa aguenta um valor diferente. Suba aos poucos e teste a estabilidade; travamento, artefatos na tela ou o driver reiniciando são sinais para voltar.",
          },
          {
            kind: "p",
            text: "No **NITRO OC** (placas NVIDIA), cada ajuste vem marcado como Seguro, Risco moderado ou Risco alto, há um verificador de estabilidade e, por padrão, tudo vale só até reiniciar o PC.",
          },
        ],
      },
    ],
  },
  {
    slug: "tela-esticada-valorant",
    title: "Como usar tela esticada (full stretched) no VALORANT",
    metaTitle: "Tela esticada no VALORANT (full stretched): passo a passo",
    shortTitle: "Tela esticada no VALORANT",
    description:
      "Passo a passo da resolução esticada no VALORANT: criar a resolução (1280x960, 1440x1080), escala em tela cheia na NVIDIA e na AMD, desativar os monitores e voltar ao normal.",
    keywords: ["tela esticada VALORANT", "full stretched VALORANT", "resolução esticada VALORANT", "4:3 esticado", "1280x960 VALORANT", "1440x1080 VALORANT"],
    published: "2026-10-23",
    updated: "2026-10-23",
    intro:
      'Tela esticada é jogar numa resolução mais "quadrada", como 4:3, esticada para preencher o monitor inteiro. É questão de gosto: a imagem fica mais larga, e muita gente se acostuma e não volta mais. No VALORANT, para esticar de verdade, o truque é **desativar os monitores** enquanto o jogo roda. Veja o passo a passo manual e como o **NITRO HUB** automatiza tudo.',
    sections: [
      {
        id: "resolucao",
        title: "1. Escolha a resolução",
        blocks: [
          {
            kind: "p",
            text: "As mais usadas são **1280x960** e **1440x1080** (4:3). Também há quem crie uma resolução própria, como 1440x993 ou 1600x1080. Quanto mais baixa, mais FPS e menos nitidez.",
          },
        ],
      },
      {
        id: "criar-resolucao",
        title: "2. Crie a resolução personalizada",
        blocks: [
          {
            kind: "list",
            items: [
              "**NVIDIA:** Painel de Controle da NVIDIA › Exibição › Alterar resolução › **Personalizar** › Criar resolução personalizada. Use a **mesma taxa de atualização (Hz)** do monitor.",
              "**AMD:** AMD Software › Configurações › Tela › **Resoluções personalizadas**.",
            ],
          },
        ],
      },
      {
        id: "escala",
        title: "3. Deixe a placa de vídeo esticar a imagem",
        blocks: [
          {
            kind: "list",
            items: [
              "**NVIDIA:** Exibição › Ajustar o tamanho e a posição da área de trabalho › Modo de escala: **Tela cheia** · Executar escala em: **GPU** · marque **Substituir o modo de escala definido por jogos e programas**.",
              "**AMD:** Tela › **Escala de GPU** ligada · Modo de escala: **Tela cheia**.",
            ],
          },
        ],
      },
      {
        id: "monitores",
        title: "4. Desative os monitores durante o jogo",
        blocks: [
          {
            kind: "p",
            text: "Com o monitor ativo no Gerenciador de Dispositivos, o Windows lê as informações dele (o EDID) e o VALORANT mantém a proporção, com barras pretas nas laterais. Sem o monitor ali, o jogo passa a esticar a imagem na tela inteira.",
          },
          {
            kind: "steps",
            items: [
              "Abra o **Gerenciador de Dispositivos** (clique com o botão direito no menu Iniciar).",
              "Expanda **Monitores**.",
              "Clique com o botão direito em cada monitor e escolha **Desabilitar dispositivo**. A tela pisca e volta.",
              "Depois de jogar, faça o mesmo caminho e escolha **Habilitar dispositivo**.",
            ],
          },
          {
            kind: "note",
            title: "Com o NITRO HUB",
            text: "No **Modo jogo**, aba Telas, marque **Desativar todos os monitores durante o jogo** e escolha a resolução em **Resolução do Windows durante o jogo**. Ao clicar em JOGAR, ele desativa os monitores e troca a resolução; quando o jogo fecha (ou em VOLTAR AO NORMAL), reativa tudo. Ao adicionar o VALORANT, o passo a passo já abre nessa parte.",
          },
        ],
      },
      {
        id: "no-jogo",
        title: "5. Configure o VALORANT",
        blocks: [
          {
            kind: "p",
            text: "No jogo: Configurações › **Vídeo** › Geral › Modo de exibição: **Tela cheia** · Resolução: a que você criou · **Método de proporção: Preencher**.",
          },
        ],
      },
      {
        id: "problemas",
        title: "Se não esticar",
        blocks: [
          {
            kind: "list",
            items: [
              "Confira se o jogo está em **Tela cheia**, e não em janela sem borda.",
              "Confira se o modo de escala do driver ficou em **Tela cheia** e se a opção de substituir o modo de escala está marcada (NVIDIA).",
              "Veja se a resolução criada usa a mesma taxa de atualização do monitor; se não, ela pode nem aparecer no jogo.",
              "No notebook, a tela do próprio notebook também é um monitor: ela apaga por alguns segundos ao desativar e volta sozinha.",
            ],
          },
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}
