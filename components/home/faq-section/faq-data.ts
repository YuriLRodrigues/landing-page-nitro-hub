import { LINKS } from "@/lib/links";

/** `answer` usa a marcação de `lib/rich-text` (**negrito**, `código`, [link](url)); vira também o FAQ do JSON-LD. */
export type FaqItem = { question: string; answer: string };

/** Fonte: README.md e NOVIDADES.md do NITRO HUB. */
export const FAQ: FaqItem[] = [
  {
    question: "É grátis mesmo?",
    answer: `Sim. O NITRO HUB é gratuito e de código aberto, com licença MIT: o código está no [GitHub](${LINKS.repo}) para quem quiser ver como funciona.`,
  },
  {
    question: "Como melhorar o desempenho do PC no Windows 11 ou 10?",
    answer:
      "O que mais ajuda é tirar o que atrapalha: programas em segundo plano, modo de energia econômico, apps que abrem com o Windows, gravação do Game Bar ligada, driver de vídeo desatualizado e temperatura alta. O NITRO HUB faz esses ajustes com **botão de desfazer** e mostra o antes e o depois. O passo a passo, inclusive do jeito manual, está no guia [Como melhorar o desempenho do PC no Windows 11 e 10](/guias/melhorar-desempenho-windows).",
  },
  {
    question: "O NITRO HUB aumenta o FPS?",
    answer:
      "Ele não faz milagre: o ganho vem de remover gargalos. Num PC com muita coisa aberta, no modo de economia de energia ou esquentando, a diferença costuma aparecer; num PC já ajustado, ela é pequena. O overlay mede o FPS e o 1% low, e o **detector de gargalo** diz se o limite é a placa de vídeo, o processador, a memória ou a temperatura. Veja [Como aumentar o FPS nos jogos](/guias/aumentar-fps).",
  },
  {
    question: "Funciona no Windows 10?",
    answer: "Sim. O NITRO HUB roda no **Windows 10 e no Windows 11, de 64 bits**, e o .NET já vem dentro do app. Notebook ou PC de mesa, com placa NVIDIA, AMD ou Intel.",
  },
  {
    question: "Posso usar com jogos que têm anti-cheat?",
    answer:
      "O overlay mede o FPS pelos eventos do próprio Windows (ETW), do mesmo jeito que o PresentMon, e **não injeta nada no jogo**: ele é uma janela transparente por cima, que ignora cliques. Por isso não aparece em tela cheia exclusiva — use o modo janela sem borda. Mesmo assim, cada jogo tem as próprias regras; na dúvida, confira as do seu.",
  },
  {
    question: "Como fazer a tela esticada (full stretched) no VALORANT?",
    answer:
      "Crie a resolução no painel da NVIDIA ou no AMD Software, deixe a escala em **Tela cheia** e, no jogo, use **Tela cheia** com **Método de proporção: Preencher**. Para esticar de verdade, os monitores precisam ser desativados durante o jogo — o Modo jogo do NITRO HUB faz isso e reativa tudo quando o jogo fecha. Passo a passo em [Tela esticada no VALORANT](/guias/tela-esticada-valorant).",
  },
  {
    question: "Precisa rodar como administrador?",
    answer:
      "Sim. O Windows só libera a leitura dos sensores de baixo nível (temperatura, consumo, clocks) e os ajustes do sistema para programas com permissão de administrador. O app pede ao abrir. Se você ligar **Iniciar com o Windows**, ele abre direto na bandeja, sem a pergunta do UAC.",
  },
  {
    question: "Por que o Windows mostra um aviso ao instalar?",
    answer:
      "O instalador ainda não tem assinatura digital paga, então o SmartScreen mostra “O Windows protegeu o computador”. Clique em **Mais informações** e em **Executar assim mesmo**. Isso só acontece com o arquivo baixado pelo navegador; as atualizações feitas pelo próprio app não passam por esse aviso.",
  },
  {
    question: "Como o app se atualiza?",
    answer:
      "Ele procura versão nova uns 30 segundos depois de abrir e a cada 12 horas. Quando encontra, mostra um aviso; **ATUALIZAR AGORA** baixa o instalador, confere o SHA-256 publicado na versão e instala sozinho — o app fecha e abre de novo já atualizado. Dá para desligar em Sobre.",
  },
  {
    question: "Funciona em notebook?",
    answer:
      "Sim. O Modo jogo foi pensado para notebooks gamer como o Dell G15, e em Dell e Alienware dá para trocar o modo térmico. No notebook, o limite de energia da GPU fica bloqueado (quem controla é o Dynamic Boost), mas o resto do overclock funciona.",
  },
  {
    question: "Tenho placa AMD ou Intel. Funciona?",
    answer:
      "A maior parte do app funciona com qualquer marca: sensores, fichas, benchmarks, otimizações e Modo jogo. Só a gravação de overclock é para NVIDIA; em AMD e Intel, o app mostra os dados e aponta o AMD Software ou o Intel Graphics Software.",
  },
  {
    question: "Como desinstalar?",
    answer: "Em **Configurações › Aplicativos**, como qualquer programa. Suas configurações ficam guardadas em `%AppData%\\NitroHub`, caso você instale de novo.",
  },
];
