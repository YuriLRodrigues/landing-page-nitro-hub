import { FileText, HardDrive, type LucideIcon, PackagePlus, Palette, Power, Usb } from "lucide-react";

export type Feature = {
  title: string;
  /** Referência que ajuda a entender ("estilo CPU-Z") ou o nome da tela no app. */
  tag?: string;
  description: string;
};

export type MockupId = "game-mode" | "oc-risk" | "phone" | "cpu-sheet";

export type FeatureGroup = {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  mockup: MockupId;
  features: Feature[];
};

/** Fonte: README.md e NOVIDADES.md do NITRO HUB. Nada aqui é recurso planejado. */
export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "no-jogo",
    kicker: "No jogo",
    title: "Do clique em JOGAR até o resumo da partida",
    intro: "Escolha o jogo e clique em JOGAR: o app prepara o PC. Quando o jogo fecha, tudo volta ao normal e a partida fica registrada.",
    mockup: "game-mode",
    features: [
      {
        title: "Modo jogo",
        description:
          "Fecha os programas de segundo plano (menos os que você quer manter, como o Discord), limpa a RAM e os arquivos temporários, liga o plano Alto desempenho e troca a resolução — em Dell e Alienware, também o modo térmico. Ao adicionar um jogo, um passo a passo ajuda a configurar (dá para pular qualquer passo), inclusive a tela esticada do VALORANT.",
      },
      {
        title: "Overlay de FPS",
        tag: "estilo Afterburner",
        description:
          "FPS, frametime, 1% low e gráfico, mais uso, temperatura e clock da GPU e da CPU, VRAM e RAM por cima do jogo. Você escolhe cada item. O FPS é medido pelos eventos do Windows (ETW), sem injetar nada no jogo.",
      },
      {
        title: "Biblioteca com capas e tempo jogado",
        description:
          "Encontra os jogos da Steam, Epic Games, GOG, Ubisoft Connect e Riot, mostra a capa e o tempo jogado (inclusive o da Steam) e guarda um perfil por jogo: prioridade, GPU dedicada, gráficos e programas que abrem junto.",
      },
      {
        title: "Sessões de jogo",
        description:
          "Cada partida fica gravada: FPS médio, 1% e 0,1% low, engasgos, temperaturas e gargalo. Ao fechar o jogo vem o resumo, com gráfico de frametime e comparação entre duas sessões.",
      },
      {
        title: "Perfis compartilháveis",
        tag: ".nitroperfil",
        description:
          "Exporte o perfil de um jogo, o overlay ou a aparência num arquivo .nitroperfil e mande para um amigo. Quem importa escolhe o que trazer e vê o que é arriscado no PC dele, como o overclock de outra placa.",
      },
    ],
  },
  {
    id: "desempenho",
    kicker: "Desempenho",
    title: "Mais desempenho, com o risco à vista",
    intro: "Nenhum ajuste escondido: cada mudança tem interruptor, explicação e caminho de volta.",
    mockup: "oc-risk",
    features: [
      {
        title: "Overclock com áreas de risco",
        tag: "NITRO OC",
        description:
          "Clock do núcleo e da memória da GPU NVIDIA, limite de energia e de clock, e um verificador de estabilidade. Cada área é marcada como Seguro, Risco moderado ou Risco alto, e o risco alto fica trancado até você confirmar “Entendo os riscos”. Por padrão, tudo vale só até reiniciar.",
      },
      {
        title: "Otimizações do Windows reversíveis",
        tag: "NITRO OTIMIZA",
        description:
          "Plano Alto desempenho, Modo de Jogo, Game DVR, HAGS, aceleração do mouse, core parking, telemetria e outros, cada um com interruptor e “Restaurar originais”. Defender, VBS, UAC e Windows Update ficam como estão.",
      },
      {
        title: "Ajustes da placa de vídeo",
        description:
          "Mostra o que está configurado e o que recomendamos para jogos no driver NVIDIA, AMD ou Intel e nas opções gráficas do Windows — atual x recomendado, sem alterar nada.",
      },
      {
        title: "Benchmarks e stress test",
        tag: "NITRO BENCH",
        description:
          "Notas de CPU (no princípio do Cinebench), GPU, ray tracing, memória e disco, com histórico. O stress test para sozinho quando a temperatura passa do limite que você escolheu.",
      },
    ],
  },
  {
    id: "monitoramento",
    kicker: "Sensores e alertas",
    title: "Temperatura e uso onde você estiver olhando",
    intro: "Os sensores ficam sempre à mão: na janela do app, no ícone perto do relógio e até no celular.",
    mockup: "phone",
    features: [
      {
        title: "Sensores em tempo real",
        description:
          "Temperatura, clock, uso, tensão, ventoinhas e consumo de cada peça, atualizados a cada segundo, com busca e filtros. Dá para gravar tudo em CSV e abrir no Excel.",
      },
      {
        title: "Alertas",
        description: "Avisa quando a CPU ou a GPU esquentam, a GPU reduz o clock, a RAM enche, um disco piora no S.M.A.R.T. ou a bateria está fraca.",
      },
      {
        title: "Painel no celular",
        description: "Temperaturas, uso e FPS no celular, pela rede de casa: é só ler o QR code. O link tem uma chave secreta, então só vê quem tem o link.",
      },
      {
        title: "Na bandeja do Windows",
        description: "Ícone perto do relógio com as temperaturas e um menu rápido. O app pode iniciar com o Windows direto ali, sem a pergunta do UAC.",
      },
    ],
  },
  {
    id: "diagnostico",
    kicker: "Diagnóstico",
    title: "Descubra o que está travando o PC",
    intro: "Quando o jogo engasga ou o PC parece lento, o app aponta a causa provável em vez de mostrar só números.",
    mockup: "cpu-sheet",
    features: [
      {
        title: "Engasgos",
        tag: "DPC/ISR, como o LatencyMon",
        description: "Descobre qual driver está travando o sistema e diz o que fazer.",
      },
      {
        title: "Detector de gargalo",
        description: "Mostra se o jogo está limitado pela GPU, pela CPU, pela VRAM, pela RAM, pela temperatura ou por uma trava de FPS, com recomendações.",
      },
      {
        title: "Ficha do processador",
        tag: "estilo CPU-Z",
        description: "Codinome, litografia, núcleos P e E, clocks ao vivo com multiplicador, caches e instruções — com aviso quando falta AVX ou AVX2, que alguns jogos exigem.",
      },
      {
        title: "Barramento PCIe",
        description: "Confere se a placa de vídeo e os SSDs NVMe estão ligados com todas as pistas e na geração PCIe que aceitam.",
      },
      {
        title: "Placa de vídeo, discos e rede",
        tag: "estilo GPU-Z",
        description: "Ficha completa da GPU, saúde dos discos (S.M.A.R.T.) com veredito e um teste de rede que mostra se o lag vem do Wi-Fi, do roteador ou do provedor.",
      },
    ],
  },
];

export type Tool = { title: string; description: string; Icon: LucideIcon };

export const TOOLS: Tool[] = [
  { title: "Inicialização", description: "Veja, desative ou remova o que abre com o Windows, com opção de desfazer.", Icon: Power },
  { title: "Instalar apps", description: "Steam, Chrome, Discord, 7-Zip, VLC e outros de uma vez, pelo winget, depois de formatar.", Icon: PackagePlus },
  {
    title: "Liberar espaço",
    description: "Limpa arquivos temporários, caches de shader do DirectX e da NVIDIA e a Lixeira, mostrando o tamanho de cada um.",
    Icon: HardDrive,
  },
  { title: "NITRO MAKER", description: "Para Arduino e ESP32: limpa portas COM fantasmas e resolve drivers CH340, CP2102, FTDI e Prolific.", Icon: Usb },
  { title: "Aparência", description: "Escuro ou claro, cor de destaque, vidro do Windows 11 e tamanho da interface.", Icon: Palette },
  { title: "Relatório do PC", description: "Exporta sistema, RAM, discos e saúde dos discos num arquivo HTML ou JSON.", Icon: FileText },
];
