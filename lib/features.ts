import {
  BrushCleaning,
  ChartColumn,
  Cpu,
  Gamepad2,
  Gauge,
  Library,
  type LucideIcon,
  MonitorCog,
  MonitorSmartphone,
  Palette,
  Power,
  RefreshCw,
  Search,
  Star,
  SearchCheck,
  Share2,
  SlidersHorizontal,
  Stethoscope,
  Smartphone,
  Thermometer,
  Usb,
  Zap,
} from "lucide-react";

/**
 * Recursos do NITRO HUB: cada um tem página própria em /recursos/[slug] e aparece no menu Recursos, na página inicial e no
 * sitemap. Fonte: README.md e NOVIDADES.md do app (nada aqui é planejado). Textos com a marcação de `lib/rich-text`.
 */
export type GroupId = "jogo" | "desempenho" | "sensores" | "diagnostico" | "ferramentas";
export type MockupId = "game-mode" | "oc-risk" | "phone" | "cpu-sheet";

export type FeatureGroup = { id: GroupId; kicker: string; title: string; intro: string; mockup?: MockupId };

export type Feature = {
  slug: string;
  group: GroupId;
  title: string;
  /** Referência que ajuda a entender ("estilo Afterburner") ou o nome da tela no app. */
  tag?: string;
  /** Chegou na versão mais recente. */
  isNew?: boolean;
  Icon: LucideIcon;
  /** Uma ou duas frases: cartões e menu. */
  summary: string;
  /** Título da aba e do Google (o layout acrescenta "· NITRO HUB"). */
  metaTitle: string;
  /** Abertura da página. */
  intro: string;
  highlights: { title: string; text: string }[];
  steps: string[];
  note?: { kind: "info" | "warn"; title: string; text: string };
  /** Guia relacionado em /guias. */
  guide?: string;
  keywords: string[];
};

export const GROUPS: FeatureGroup[] = [
  {
    id: "jogo",
    kicker: "No jogo",
    title: "Do clique em JOGAR até o resumo da partida",
    intro: "Escolha o jogo e clique em JOGAR: o app prepara o PC. Quando o jogo fecha, tudo volta ao normal e a partida fica registrada.",
    mockup: "game-mode",
  },
  {
    id: "desempenho",
    kicker: "Desempenho",
    title: "Mais desempenho, com o risco à vista",
    intro: "Nenhum ajuste escondido: cada mudança tem interruptor, explicação e caminho de volta.",
    mockup: "oc-risk",
  },
  {
    id: "sensores",
    kicker: "Sensores e alertas",
    title: "Temperatura e uso onde você estiver olhando",
    intro: "Os sensores ficam sempre à mão: na janela do app, no ícone perto do relógio e até no celular.",
    mockup: "phone",
  },
  {
    id: "diagnostico",
    kicker: "Diagnóstico",
    title: "Descubra o que está travando o PC",
    intro: "Quando o jogo engasga ou o PC parece lento, o app aponta a causa provável em vez de mostrar só números.",
    mockup: "cpu-sheet",
  },
  {
    id: "ferramentas",
    kicker: "Ferramentas",
    title: "Para depois de formatar e para o dia a dia",
    intro: "Limpeza com quarentena, pesquisa de qualquer arquivo, favoritos e atalhos, programas que abrem com o Windows e a aparência do seu jeito.",
  },
];

export const FEATURES: Feature[] = [
  // ---------------- No jogo ----------------
  {
    slug: "modo-jogo",
    group: "jogo",
    title: "Modo jogo",
    isNew: true,
    Icon: Gamepad2,
    summary: "Fecha o que pesa em segundo plano, limpa a RAM, liga o Alto desempenho e ajusta a tela. Quando o jogo fecha, desfaz tudo.",
    metaTitle: "Modo jogo para Windows: feche o que pesa e jogue com mais FPS",
    intro:
      "Clique em **JOGAR** e o NITRO HUB prepara o PC para o jogo: fecha o que está pesando, troca energia e resolução e, em notebooks Dell e Alienware, o modo térmico. Quando o jogo fecha, **tudo volta ao que era**.",
    highlights: [
      { title: "Fecha o que pesa", text: "Programas de segundo plano saem da frente, menos os que você quer manter, como o Discord." },
      { title: "Limpa a RAM e os temporários", text: "Libera memória e a pasta Temp antes de abrir o jogo." },
      { title: "Energia e tela", text: "Liga o plano Alto desempenho e troca a resolução e a taxa de atualização só durante o jogo." },
      { title: "Tela esticada", text: "Desativa os monitores durante a partida para a resolução esticada (full stretched) do VALORANT funcionar." },
      { title: "Passo a passo", text: "Ao adicionar um jogo, um passo a passo ajuda a configurar. Dá para pular qualquer passo." },
      { title: "Volta ao normal", text: "Ao fechar o jogo, ou em VOLTAR AO NORMAL, monitores, resolução, energia e programas voltam como estavam." },
      {
        title: "Automático, se você quiser",
        text: "Abriu o jogo pela Steam, por um atalho ou pelo launcher? O perfil é aplicado sozinho e tudo volta quando o jogo fecha. Vem desligado.",
      },
      { title: "Confirma antes de mudar", text: "Mostra o que vai mudar no Windows e oferece criar um ponto de restauração antes." },
    ],
    steps: ["Adicione o jogo (a Biblioteca encontra os da Steam, Epic, GOG, Ubisoft e Riot).", "Siga o passo a passo ou pule o que não quiser.", "Clique em **JOGAR**."],
    guide: "melhorar-desempenho-windows",
    keywords: ["modo jogo", "otimizar PC para jogos", "fechar programas em segundo plano", "aumentar FPS"],
  },
  {
    slug: "overlay-de-fps",
    group: "jogo",
    title: "Overlay de FPS",
    tag: "estilo Afterburner",
    Icon: Gauge,
    summary: "FPS, frametime, 1% low e gráfico, mais temperatura, uso e clock da GPU e da CPU por cima do jogo. Sem injetar nada.",
    metaTitle: "Overlay de FPS grátis para Windows (estilo Afterburner)",
    intro:
      "Veja o FPS e as temperaturas por cima do jogo, do jeito que você quiser. O FPS é medido pelos eventos do próprio Windows (ETW), como o PresentMon, **sem injetar nada no jogo**.",
    highlights: [
      { title: "FPS de verdade", text: "FPS, frametime, 1% e 0,1% low e um gráfico de frametime ao vivo." },
      { title: "Tudo da GPU e da CPU", text: "Uso, temperatura, clock e consumo, mais VRAM e RAM usadas." },
      { title: "Do seu jeito", text: "Escolha, renomeie e reordene cada item; mude posição, tamanho, fonte, cores e o layout (vertical, horizontal ou detalhado)." },
      { title: "Atalho de teclado", text: "Liga e desliga com um atalho (Ctrl+Shift+O por padrão), sem sair do jogo." },
      { title: "Seguro com anti-cheat", text: "É uma janela transparente por cima, que ignora cliques. Não toca no processo do jogo." },
    ],
    steps: ["Abra NITRO JOGOS › Overlay.", "Escolha os itens e o estilo (há um modelo pronto no estilo Afterburner).", "Jogue em **janela sem borda** e use o atalho."],
    note: { kind: "info", title: "Tela cheia exclusiva", text: "Em tela cheia exclusiva o Windows não deixa nenhuma janela por cima. Use o modo janela sem borda do jogo." },
    guide: "aumentar-fps",
    keywords: ["overlay de FPS", "mostrar FPS na tela", "contador de FPS", "1% low", "frametime"],
  },
  {
    slug: "biblioteca-e-sessoes",
    group: "jogo",
    title: "Biblioteca e sessões de jogo",
    Icon: Library,
    summary: "Seus jogos com capa e tempo jogado, um perfil por jogo e o resumo de cada partida: FPS, 1% low, engasgos e temperaturas.",
    metaTitle: "Biblioteca de jogos e histórico de FPS por partida",
    intro: "A Biblioteca junta os jogos de todas as lojas num lugar só, e cada partida fica gravada para você comparar depois.",
    highlights: [
      { title: "Todas as lojas", text: "Encontra os jogos da Steam, Epic Games, GOG, Ubisoft Connect e Riot, com capa e tempo jogado (inclusive o da Steam)." },
      { title: "Perfil por jogo", text: "Prioridade, GPU dedicada, gráficos e programas que abrem junto." },
      { title: "Cada partida registrada", text: "FPS médio, 1% e 0,1% low, engasgos, temperaturas e gargalo." },
      { title: "Resumo e comparação", text: "Ao fechar o jogo vem o resumo com gráfico de frametime. Dá para comparar duas sessões." },
      {
        title: "O motivo em palavras simples",
        text: 'Compara a partida com a sua média ("8% pior que a sua média") e diz o motivo provável, como a GPU quente reduzindo o clock.',
      },
    ],
    steps: ["Abra NITRO JOGOS › Biblioteca.", "Escolha o jogo e ajuste o perfil, se quiser.", "Jogue: a sessão aparece em Sessões quando o jogo fecha."],
    keywords: ["biblioteca de jogos", "histórico de FPS", "tempo jogado"],
  },
  {
    slug: "perfis-compartilhaveis",
    group: "jogo",
    title: "Perfis compartilháveis",
    tag: ".nitroperfil",
    Icon: Share2,
    summary: "Exporte o perfil de um jogo, o overlay ou a aparência num arquivo e mande para um amigo. Quem importa escolhe o que trazer.",
    metaTitle: "Perfis compartilháveis: mande suas configurações para um amigo",
    intro: "Configurou tudo do seu jeito? Gere um arquivo **.nitroperfil** e mande para um amigo. Dois cliques no arquivo abrem a importação no NITRO HUB.",
    highlights: [
      { title: "Escolha o que vai", text: "Jogo, desempenho, programas, telas, overclock, overlay e aparência: você marca o que entra no arquivo." },
      { title: "Escolha o que vem", text: "Quem importa vê cada parte e marca só o que quer trazer." },
      { title: "Risco à vista", text: "Overclock de outra placa e argumentos de inicialização com comandos vêm marcados como risco e desmarcados." },
      { title: "Sem caminhos nem programas", text: "O arquivo nunca leva o .exe do jogo nem programas: só configurações, conferidas ao importar." },
    ],
    steps: [
      "No Modo jogo, Overlay ou Aparência, clique em EXPORTAR PERFIL.",
      "Marque as partes e salve o arquivo.",
      "Quem recebe dá dois cliques no arquivo e escolhe o que importar.",
    ],
    keywords: ["perfil de configuração", "compartilhar configurações", "nitroperfil"],
  },

  // ---------------- Desempenho ----------------
  {
    slug: "overclock",
    group: "desempenho",
    title: "Overclock com áreas de risco",
    tag: "NITRO OC",
    Icon: Zap,
    summary: "Clock do núcleo e da memória da GPU NVIDIA, limites de energia e verificador de estabilidade, com o risco de cada ajuste marcado.",
    metaTitle: "Overclock de GPU NVIDIA com áreas de risco e teste de estabilidade",
    intro: "Overclock sem susto: cada área vem marcada como **Seguro**, **Risco moderado** ou **Risco alto**, e por padrão tudo vale só até reiniciar o PC.",
    highlights: [
      { title: "Núcleo e memória", text: "Ajuste os clocks da GPU NVIDIA, de mesa ou de notebook." },
      { title: "Limites", text: "Limite de energia e de clock (no notebook, o de energia fica com o Dynamic Boost)." },
      { title: "Risco trancado", text: 'O risco alto só libera depois de você confirmar "Entendo os riscos".' },
      { title: "Teste de estabilidade", text: "Um verificador acusa travamento e erros antes de você confiar no ajuste." },
    ],
    steps: ["Abra NITRO DESEMPENHO › Overclock.", "Suba aos poucos e rode o verificador de estabilidade.", "Gostou? Grave como padrão; se travar, reiniciar desfaz."],
    note: {
      kind: "warn",
      title: "Cada placa é uma",
      text: "O ganho costuma ser de poucos por cento e cada placa aguenta um valor diferente. Artefatos na tela ou o driver reiniciando são sinal para voltar.",
    },
    guide: "aumentar-fps",
    keywords: ["overclock GPU NVIDIA", "overclock placa de vídeo", "teste de estabilidade"],
  },
  {
    slug: "otimizacao-do-windows",
    group: "desempenho",
    title: "Otimizações do Windows reversíveis",
    tag: "NITRO OTIMIZA",
    Icon: SlidersHorizontal,
    summary: 'Alto desempenho, Modo de Jogo, Game DVR, HAGS, mouse, core parking e telemetria, cada um com interruptor e "Restaurar originais".',
    metaTitle: "Otimizar Windows 11 e 10 para jogos, com botão de desfazer",
    intro:
      "Os ajustes do Windows que de fato ajudam em jogos, cada um com explicação e interruptor. **Restaurar originais** volta tudo como era. Defender, VBS, UAC e Windows Update ficam como estão.",
    highlights: [
      { title: "Energia", text: "Plano Alto desempenho e core parking." },
      { title: "Jogos", text: "Modo de Jogo, gravação do Game Bar (Game DVR) e agendamento de GPU por hardware (HAGS)." },
      { title: "Mouse", text: "Aceleração do mouse desligada para mira consistente." },
      { title: "Menos coisa rodando", text: "Telemetria e serviços que não precisam ficar ligados." },
      { title: "Sem mexer na segurança", text: 'Nada de "otimização" que desliga o antivírus, o UAC ou as atualizações.' },
    ],
    steps: ["Abra NITRO FERRAMENTAS › Otimização.", "Leia cada item e ligue o que fizer sentido.", "Não gostou? **Restaurar originais**."],
    guide: "melhorar-desempenho-windows",
    keywords: ["otimizar Windows 11", "otimizar Windows 10", "desempenho Windows 11", "performance Windows 10"],
  },
  {
    slug: "ajustes-da-placa",
    group: "desempenho",
    title: "Ajustes da placa de vídeo",
    Icon: MonitorCog,
    summary: "O que está configurado e o que recomendamos para jogos no driver NVIDIA, AMD ou Intel e no Windows: atual x recomendado.",
    metaTitle: "Melhores configurações do Painel NVIDIA, AMD e Intel para jogos",
    intro: "Uma página só de leitura que compara o que está configurado com o recomendado para jogos. **Nada é alterado**: para mudar, ela mostra o caminho exato.",
    highlights: [
      { title: "NVIDIA, lido do driver", text: "Baixa latência, energia, V-Sync, limite de FPS, cache de shaders, filtragem e G-SYNC." },
      { title: "AMD e Intel", text: "Anti-Lag, Chill, Boost, FreeSync, RSR e outras, com o caminho no app do fabricante." },
      { title: "Windows", text: "HAGS, otimizações para jogos em janela, VRR, Modo de Jogo, GPU preferida por app e taxa de atualização." },
      { title: "Por jogo competitivo", text: "Onde o NVIDIA Reflex do jogo substitui a baixa latência do driver." },
    ],
    steps: ["Abra NITRO DESEMPENHO › Ajustes da placa.", "Veja o que está como PODE MELHORAR.", "Siga o caminho mostrado no painel do fabricante."],
    guide: "melhorar-desempenho-windows",
    keywords: ["configurações Painel NVIDIA para jogos", "AMD Adrenalin configurações", "melhor configuração placa de vídeo"],
  },
  {
    slug: "benchmark-e-stress",
    group: "desempenho",
    title: "Benchmarks e stress test",
    tag: "NITRO BENCH",
    Icon: ChartColumn,
    summary: "Notas de CPU, GPU, ray tracing, memória e disco, com histórico. O stress test para sozinho se a temperatura passar do limite.",
    metaTitle: "Benchmark e stress test de CPU e GPU grátis",
    intro: "Meça o seu PC e compare antes e depois de cada ajuste, com segurança: o stress test respeita o limite de temperatura que você escolher.",
    highlights: [
      { title: "CPU", text: "Nota no princípio do Cinebench, com todos os núcleos e com um só." },
      { title: "GPU e ray tracing", text: "Cena 3D e teste de ray tracing (RTX 20+, RX 6000+ ou Arc)." },
      { title: "Memória e disco", text: "Velocidade da memória RAM e do disco, para comparar com outros PCs e depois de cada ajuste." },
      { title: "Histórico", text: "Cada resultado fica guardado para comparar depois." },
      { title: "Stress com limite", text: "CPU e GPU no máximo, parando sozinho no limite de temperatura." },
    ],
    steps: ["Abra NITRO DESEMPENHO › Benchmark (ou Stress test).", "Escolha o teste e clique em INICIAR.", "Compare com os resultados anteriores."],
    keywords: ["benchmark CPU GPU", "stress test", "teste de temperatura"],
  },

  // ---------------- Sensores ----------------
  {
    slug: "sensores-e-alertas",
    group: "sensores",
    title: "Sensores e alertas",
    Icon: Thermometer,
    summary: "Temperatura, clock, uso, tensão, ventoinhas e consumo de cada peça, com alertas e o ícone perto do relógio.",
    metaTitle: "Temperatura da CPU e da GPU em tempo real, com alertas",
    intro: "Todos os sensores do PC, atualizados a cada segundo, e avisos quando algo sai do normal.",
    highlights: [
      { title: "Todos os sensores", text: "Temperatura, clock, uso, tensão, ventoinhas e consumo, com busca e filtros." },
      { title: "Alertas", text: "CPU ou GPU quentes, GPU reduzindo o clock, RAM cheia, disco piorando no S.M.A.R.T. e bateria fraca." },
      { title: "Na bandeja", text: "Ícone perto do relógio com as temperaturas e um menu rápido." },
      { title: "Gravar em CSV", text: "Grave tudo e abra no Excel." },
    ],
    steps: ["Abra NITRO HUB › Sensores.", "Ligue os alertas que quiser.", "Ative Iniciar com o Windows para ter tudo na bandeja."],
    note: { kind: "info", title: "Temperatura da CPU", text: "A leitura da CPU usa o driver gratuito PawnIO. Se ele faltar, o app avisa e oferece instalar." },
    keywords: ["temperatura da CPU", "temperatura da GPU", "monitorar temperatura", "sensores do PC"],
  },
  {
    slug: "painel-no-celular",
    group: "sensores",
    title: "Painel no celular",
    isNew: true,
    Icon: Smartphone,
    summary: "Temperaturas, FPS, sensores e informações do PC no celular, pela rede de casa. É só ler o QR code.",
    metaTitle: "Veja o FPS e a temperatura do PC no celular",
    intro:
      "Acompanhe o PC no celular enquanto joga, sem instalar nada no telefone: abra o QR code e pronto. **No painel, nada pode ser alterado pelo celular**; controlar o PC é um recurso à parte, que vem desligado.",
    highlights: [
      { title: "Visão geral e jogo", text: "FPS, frametime, 1% e 0,1% low, gráfico dos últimos minutos e gargalo." },
      { title: "Sensores e sistema", text: "Todos os sensores e as informações do Windows, CPU, GPU, RAM e discos." },
      { title: "Só na sua rede", text: "Funciona pela rede local, sem internet, e o link tem uma chave secreta." },
      { title: "Corte o acesso", text: "GERAR LINK NOVO derruba quem tinha o link antigo." },
      { title: "Segunda tela", text: "Temperaturas, uso, RAM e FPS em letras grandes, com a tela do celular sempre ligada, para deixar de lado na mesa." },
      { title: "Alertas no celular", text: "Os avisos de temperatura, RAM e bateria do PC aparecem também no celular." },
      { title: "Mídia e jogos", text: "Volume, tocar/pausar e abrir um jogo do Modo jogo pelo celular, com uma permissão própria que você liga no PC." },
    ],
    steps: ["Abra Painel no celular, no fim do menu lateral, e ligue o painel.", "Leia o QR code com o celular na mesma rede Wi-Fi.", "Deixe a página aberta enquanto joga."],
    keywords: ["FPS no celular", "monitorar PC pelo celular", "temperatura no celular"],
  },

  {
    slug: "espelhar-no-celular",
    group: "sensores",
    title: "Espelhar no celular",
    tag: "estilo AnyDesk, em casa ou pela internet",
    isNew: true,
    Icon: MonitorSmartphone,
    summary: "Veja a tela do PC no navegador do celular e, se você permitir, use o celular como trackpad e teclado.",
    metaTitle: "Ver e controlar o PC pelo celular, sem instalar nada no telefone",
    intro:
      "A tela do PC no celular, pelo navegador, e o celular como **mouse e teclado** quando você permitir. Cada conexão precisa de um **código novo**, mostrado só na tela do PC.",
    highlights: [
      { title: "Código de uso único", text: "QR code ou 8 caracteres, que valem 2 minutos e nunca passam pela rede." },
      { title: "Comandos protegidos", text: "Mouse e teclado vão assinados e cifrados: ninguém na mesma rede consegue mandar comandos no seu lugar." },
      { title: "Ver e controlar separados", text: "Ver a tela e controlar mouse e teclado são permissões diferentes. O controle vem desligado." },
      { title: "Sempre à vista", text: "Enquanto um celular está conectado, um aviso no topo da tela do PC mostra isso, com o botão PARAR." },
      { title: "Toque como trackpad", text: "Toque é clique, toque longo é botão direito, dois dedos rolam. Tem teclado e as teclas Esc, Tab, setas e Win." },
      { title: "Tela do celular acesa", text: "A opção Manter a tela ligada impede que o celular apague enquanto você usa." },
    ],
    steps: [
      "Abra **Painel no celular** e ligue o painel.",
      "Em **ESPELHAR E CONTROLAR**, escolha o que permitir e clique em **ESPELHAR NO CELULAR**.",
      "Leia o QR code com o celular na mesma rede (ou digite o código).",
    ],
    note: {
      kind: "warn",
      title: "Fora de casa",
      text: "Em ACESSO PELA INTERNET, o NITRO HUB cria um link https temporário (Cloudflare) que fecha sozinho. Nunca passe o link nem o código para ninguém, nem para quem diz ser do suporte: o NITRO HUB nunca pede isso. Também funciona pelo Tailscale. Não passa por nenhum servidor do NITRO HUB.",
    },
    keywords: ["controlar PC pelo celular", "espelhar tela do PC no celular", "AnyDesk", "acesso remoto", "celular como mouse"],
  },

  // ---------------- Diagnóstico ----------------
  {
    slug: "check-up",
    group: "diagnostico",
    title: "Check-up do PC",
    isNew: true,
    Icon: Stethoscope,
    summary: "Uma nota e, em segundos, disco, saúde dos SSDs, temperaturas, driver, inicialização, RAM e ponto de restauração. Cada item leva à correção.",
    metaTitle: "Check-up do PC: descubra em segundos o que precisa de atenção",
    intro:
      "Clique em **RODAR CHECK-UP** e o NITRO HUB confere o PC em segundos, só lendo. Cada item diz se está ok, pede atenção ou tem problema, **o motivo em uma frase** e um botão que leva à correção. Nada muda sem você pedir.",
    highlights: [
      { title: "Nota de 0 a 100", text: "Um resumo rápido do estado do PC, com a data do último check-up." },
      { title: "Discos e SSDs", text: "Espaço livre em cada disco e a saúde S.M.A.R.T." },
      { title: "Temperaturas", text: "As das suas últimas partidas comparadas com o limite real da sua CPU e GPU." },
      { title: "Driver e inicialização", text: "Driver de vídeo desatualizado e programas demais abrindo com o Windows." },
      { title: "Proteção", text: "Proteção do sistema, último ponto de restauração, erros de hardware e Windows Update esperando reiniciar." },
      { title: "Semanal, se você quiser", text: "Roda sozinho uma vez por semana com o PC parado, nunca durante um jogo, e só avisa se algo pedir atenção." },
    ],
    steps: ["Abra NITRO HUB › Check-up.", "Clique em **RODAR CHECK-UP**.", "Use o botão de cada item que pedir atenção."],
    keywords: ["check-up do PC", "diagnóstico do PC", "saúde do SSD", "PC lento"],
  },
  {
    slug: "engasgos-e-gargalo",
    group: "diagnostico",
    title: "Engasgos e gargalo",
    tag: "estilo LatencyMon",
    Icon: SearchCheck,
    summary: "Descobre qual driver está travando o sistema e se o jogo está limitado pela GPU, pela CPU, pela memória ou pela temperatura.",
    metaTitle: "Por que meu jogo engasga? Detector de gargalo e de engasgos",
    intro: "Em vez de só números, o NITRO HUB diz **a causa provável** do engasgo ou do FPS baixo e o que fazer.",
    highlights: [
      { title: "Engasgos (DPC/ISR)", text: "Mede a latência dos drivers, como o LatencyMon, e aponta qual está travando." },
      { title: "Detector de gargalo", text: "GPU, CPU, VRAM, RAM, temperatura ou uma trava de FPS: mostra qual é o seu." },
      { title: "Recomendações", text: "Cada resultado vem com o que fazer em seguida." },
    ],
    steps: ["Abra NITRO JOGOS › Gargalo ou NITRO DESEMPENHO › Engasgos.", "Jogue ou deixe medir alguns minutos.", "Siga a recomendação."],
    guide: "aumentar-fps",
    keywords: ["jogo engasgando", "gargalo CPU GPU", "stutter", "LatencyMon"],
  },
  {
    slug: "fichas-do-hardware",
    group: "diagnostico",
    title: "Fichas do hardware",
    tag: "estilo CPU-Z e GPU-Z",
    Icon: Cpu,
    summary: "Ficha do processador e da placa de vídeo, ligação PCIe, saúde dos discos, teste de rede e relatório do PC.",
    metaTitle: "Ficha do processador e da GPU (estilo CPU-Z e GPU-Z)",
    intro: "Tudo o que dá para saber das peças, em português, com veredito quando algo está errado.",
    highlights: [
      { title: "Processador", text: "Codinome, litografia, núcleos P e E, clocks ao vivo com multiplicador, caches e instruções, com aviso se faltar AVX/AVX2." },
      { title: "Placa de vídeo", text: "Ficha completa da GPU, driver e memória." },
      { title: "Barramento PCIe", text: "Confere se a GPU e os SSDs NVMe estão com todas as pistas e na geração que aceitam." },
      { title: "Discos e rede", text: "Saúde dos discos (S.M.A.R.T.) e um teste que mostra se o lag vem do Wi-Fi, do roteador ou do provedor." },
      { title: "Relatório", text: "Exporta sistema, RAM, discos e saúde num arquivo HTML ou JSON." },
    ],
    steps: ["Abra NITRO HUB › Sistema (ou Placa de vídeo, Discos e Rede).", "Escolha a categoria (Processador, Barramento PCIe...).", "Exporte o relatório se for pedir ajuda."],
    keywords: ["CPU-Z", "GPU-Z", "ficha do processador", "PCIe x16", "saúde do SSD"],
  },

  // ---------------- Ferramentas ----------------
  {
    slug: "limpeza",
    group: "ferramentas",
    title: "Limpeza inteligente",
    Icon: BrushCleaning,
    summary: "Analisa antes de apagar e mostra o motivo de cada item. Arquivos pessoais vão para a quarentena por 7 dias e dá para restaurar.",
    metaTitle: "Limpar o PC com segurança: arquivos antigos, duplicados e sobras",
    intro:
      "Libere espaço sem medo: a análise **não apaga nada**, só mostra cada item com o tamanho, a data de uso e o motivo. Só o que você marcar é limpo, e o que é pessoal vai para uma **quarentena de 7 dias**.",
    highlights: [
      { title: "Temporários e caches", text: "Windows, navegadores, Discord, Steam, Epic, shaders e Windows Update: apagados de vez, porque são recriados." },
      { title: "Instaladores de driver", text: "As pastas C:\\NVIDIA, C:\\AMD e os downloads do NVIDIA App que sobram depois de instalar." },
      { title: "Downloads antigos e grandes sem uso", text: "Arquivos sem uso há 3, 6, 12 ou 24 meses, você escolhe." },
      { title: "Duplicados", text: "Conteúdo idêntico, byte a byte, com a cópia que fica indicada." },
      { title: "Sobras de programas", text: "Pastas em AppData e ProgramData de programas que você já desinstalou." },
      { title: "Quarentena e proteção", text: "7 dias para restaurar. Windows, OneDrive, projetos com Git, saves e as pastas que você proteger ficam sempre de fora." },
    ],
    steps: [
      "Abra NITRO FERRAMENTAS › Limpeza e clique em **ANALISAR**.",
      "Revise cada categoria e marque o que quer limpar.",
      "Confira o resumo e confirme. Mudou de ideia? Aba Quarentena › RESTAURAR.",
    ],
    note: {
      kind: "warn",
      title: "Revise antes de limpar",
      text: "Arquivos pessoais e sobras nunca vêm marcados. Sobras de programas podem ter saves de jogos: só marque o que você reconhece.",
    },
    guide: "melhorar-desempenho-windows",
    keywords: ["limpar PC", "liberar espaço no disco", "arquivos duplicados", "limpar arquivos temporários", "PC lento"],
  },
  {
    slug: "busca-rapida",
    group: "ferramentas",
    title: "Pesquisar tudo",
    tag: "estilo Everything",
    Icon: Search,
    summary: "Acha qualquer arquivo ou pasta do PC enquanto você digita, até os ocultos, do sistema e temporários. Só liga com a sua permissão.",
    metaTitle: "Achar qualquer arquivo no PC na hora (estilo Everything)",
    intro:
      "Digite e veja na hora **qualquer arquivo ou pasta** dos seus discos, inclusive o que o Windows esconde: `.minecraft`, `AppData`, temporários e criptografados. O índice só é montado **com a sua permissão** e fica no seu PC, criptografado para a sua conta do Windows.",
    highlights: [
      { title: "Na hora", text: "O resultado aparece a cada letra, mesmo com milhões de arquivos, e o app já abre com a busca pronta." },
      { title: "Acha o que o Windows esconde", text: "Pastas ocultas e do sistema, arquivos criptografados e temporários entram no resultado." },
      { title: "Privado", text: "Lê só os nomes e as pastas da tabela de arquivos do NTFS, nunca o conteúdo. Nada é enviado para lugar nenhum." },
      { title: "Sempre atualizado", text: "Arquivos criados, renomeados ou apagados entram e saem do índice sozinhos." },
      { title: "Filtros", text: "Só arquivos, só pastas, `ext:pdf`, `*.sav`, nome exato entre aspas e `pasta\\arquivo`." },
      { title: "De qualquer lugar", text: "Ctrl+K dentro do app e um atalho global (Ctrl+Alt+Espaço) que abre a busca até com o app fechado na bandeja." },
    ],
    steps: [
      "Abra **Pesquisar** no menu lateral (ou o destaque no Início).",
      "Clique em **PERMITIR E INDEXAR**.",
      "Digite o que procura; Enter abre e o botão direito mostra na pasta.",
    ],
    note: {
      kind: "info",
      title: "Desliga quando quiser",
      text: "Em AJUSTES › DESLIGAR o índice sai da memória e do disco na hora. Sem permissão de administrador, a busca fica mais lenta.",
    },
    keywords: ["Everything para Windows", "achar arquivo no PC", "buscar arquivos ocultos", "pasta .minecraft", "pasta AppData"],
  },
  {
    slug: "favoritos-e-atalhos",
    group: "ferramentas",
    title: "Favoritos e atalhos",
    Icon: Star,
    summary: "Fixe no menu as páginas e os jogos que você mais usa e troque qualquer atalho do teclado, inclusive o Ctrl+K.",
    metaTitle: "Favoritos e atalhos do teclado personalizáveis",
    intro: "Deixe o que você mais usa a um clique: **fixe páginas e jogos** no topo do menu e escolha **seus próprios atalhos**.",
    highlights: [
      { title: "Favoritos no menu", text: "Botão direito (ou o ⋯) em qualquer item fixa no topo do menu lateral." },
      { title: "Jogos também", text: "Fixe os jogos do Modo jogo, com a capa. O botão direito tem Jogar agora." },
      { title: "Um atalho para cada", text: "Ctrl+1 a Ctrl+9 abrem os favoritos; eles também aparecem primeiro no Ctrl+K e no ícone da bandeja." },
      { title: "Atalhos do seu jeito", text: "Troque a busca, o menu, a tela cheia e os atalhos globais, ou crie um para abrir qualquer página." },
      { title: "Sem conflito", text: "O app avisa quando a combinação já é de outra ação ou atrapalharia a digitação." },
      { title: "Página de abertura", text: "Escolha a página que abre junto com o app." },
    ],
    steps: [
      "Clique com o botão direito em um item do menu e escolha **Fixar em Favoritos**.",
      "Abra **Atalhos** no fim do menu lateral.",
      "Clique no atalho e aperte a combinação nova.",
    ],
    keywords: ["atalhos de teclado", "favoritos", "personalizar atalhos", "Ctrl+K"],
  },
  {
    slug: "aparencia",
    group: "ferramentas",
    title: "Aparência e Vidro fosco",
    Icon: Palette,
    summary: "Escuro ou claro, cor de destaque, cantos, fonte, tamanho e vidro: Mica, Acrylic ou o novo Vidro fosco, com intensidade ajustável.",
    metaTitle: "Aparência: tema escuro, cores e Vidro fosco no Windows 11",
    intro: "Deixe o app com a sua cara. O **Vidro fosco** desfoca de verdade o que está atrás da janela, também quando ela não está em foco.",
    highlights: [
      { title: "Tema e cor", text: "Escuro, claro ou igual ao Windows, com cores prontas ou a sua." },
      { title: "Vidro", text: "Mica, Acrylic ou Vidro fosco (Windows 11), com intensidade ajustável." },
      { title: "Cantos, fonte e tamanho", text: "Cantos arredondados, suaves ou retos, fonte dos títulos e escala da interface." },
      { title: "Leve", text: "O vidro é desenhado pelo próprio Windows: quase não pesa." },
    ],
    steps: ["Abra Aparência, no fim do menu lateral.", "Escolha o tema, a cor e o vidro.", "Ajuste a intensidade do fosco."],
    note: {
      kind: "info",
      title: "Vidro não aparece?",
      text: "Ligue Configurações › Personalização › Cores › Efeitos de transparência. Sem isso, o Windows desenha todo vidro como cor sólida.",
    },
    keywords: ["tema escuro", "efeito vidro Windows 11", "acrylic", "mica"],
  },
  {
    slug: "atualizacoes",
    group: "ferramentas",
    title: "Atualizações",
    isNew: true,
    Icon: RefreshCw,
    summary: "O que tem versão nova nos programas, no driver de vídeo e nos drivers do Windows Update. Você escolhe o que atualizar.",
    metaTitle: "Atualize programas e drivers do PC num lugar só",
    intro:
      "Clique em **PROCURAR ATUALIZAÇÕES** e veja numa página só o que tem versão nova. **Nada vem marcado e nada atualiza sozinho**: você escolhe, confirma e acompanha o resultado de cada um.",
    highlights: [
      { title: "Programas", text: "Pelo winget, o instalador de pacotes da Microsoft que já vem no Windows, em qualquer idioma." },
      { title: "Driver de vídeo", text: "NVIDIA e AMD, baixado do servidor oficial com a assinatura digital conferida." },
      { title: "Windows Update", text: "Drivers que o Windows Update tem para as suas peças, um de cada vez." },
      {
        title: "Você escolhe",
        text: "Cada item mostra a versão atual → a nova e de onde vem. Programas fixados ou com versão desconhecida aparecem desmarcados, com a explicação.",
      },
      { title: "Com ponto de restauração", text: "Antes de atualizar, oferece criar um ponto de restauração do Windows." },
      { title: "Um de cada vez", text: "O resultado de cada item (atualizado, falhou e por quê, precisa reiniciar) e dá para parar entre um e outro." },
    ],
    steps: ["Abra NITRO FERRAMENTAS › Atualizações.", "Clique em **PROCURAR ATUALIZAÇÕES**.", "Marque o que quiser e clique em **ATUALIZAR SELECIONADOS**."],
    keywords: ["atualizar programas", "winget", "atualizar driver de vídeo", "atualizar drivers"],
  },
  {
    slug: "inicializacao-e-apps",
    group: "ferramentas",
    title: "Inicialização e apps",
    Icon: Power,
    summary: "Veja e desative o que abre com o Windows e instale os apps essenciais de uma vez depois de formatar.",
    metaTitle: "Programas que iniciam com o Windows e apps essenciais pós-formatação",
    intro: "Para o dia a dia e para depois de formatar: menos coisa abrindo com o Windows e os apps de sempre instalados de uma vez.",
    highlights: [
      { title: "Inicialização", text: 'Desative ou remova o que abre com o Windows, com "Restaurar removidos".' },
      { title: "Instalar apps", text: "Steam, Chrome, Discord, 7-Zip, VLC e outros, na versão oficial, pelo winget." },
      { title: "Drivers", text: "Verifica, baixa e instala o driver de vídeo: NVIDIA e AMD automáticos, outros fabricantes pela página oficial." },
    ],
    steps: [
      "Abra NITRO FERRAMENTAS › Inicialização, Instalar apps ou Drivers.",
      "Desmarque o que não precisa ou marque o que quer instalar.",
      "Pronto: vale na próxima vez que o Windows iniciar.",
    ],
    keywords: ["programas que iniciam com o Windows", "o que instalar depois de formatar", "winget"],
  },
  {
    slug: "nitro-maker",
    group: "ferramentas",
    title: "NITRO MAKER",
    tag: "Arduino e ESP32",
    Icon: Usb,
    summary: "Limpa portas COM fantasmas e resolve os drivers CH340, CP2102, FTDI e Prolific de placas Arduino e ESP32.",
    metaTitle: "Arduino e ESP32 não aparecem? Drivers CH340, CP2102 e portas COM",
    intro: "Para quem mexe com eletrônica: a placa não aparece ou a porta COM está presa? O NITRO MAKER resolve.",
    highlights: [
      { title: "Portas COM", text: "Lista as portas em uso e libera as fantasmas, que prendem os números." },
      { title: "Drivers seriais", text: "CH340, CP2102, FTDI e Prolific, com os drivers oficiais dos fabricantes." },
    ],
    steps: ["Abra NITRO MAKER › Portas COM ou Drivers seriais.", "Veja as portas e os drivers.", "Instale o driver que faltar ou libere as portas."],
    keywords: ["driver CH340", "driver CP2102", "porta COM Arduino", "ESP32 não aparece"],
  },
];

export function getFeature(slug: string): Feature | undefined {
  return FEATURES.find((f) => f.slug === slug);
}

export function featuresOf(group: GroupId): Feature[] {
  return FEATURES.filter((f) => f.group === group);
}
