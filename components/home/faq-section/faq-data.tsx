import type { ReactNode } from "react";

import { LINKS } from "@/lib/links";

export type FaqItem = { question: string; answer: ReactNode };

const strong = "font-semibold text-foreground";

/** Fonte: README.md e NOVIDADES.md do NITRO HUB. */
export const FAQ: FaqItem[] = [
  {
    question: "É grátis mesmo?",
    answer: (
      <>
        Sim. O NITRO HUB é gratuito e de código aberto, com licença MIT: o código está no{" "}
        <a href={LINKS.repo} target="_blank" rel="noopener noreferrer" className="rounded-sm font-medium text-primary-soft underline underline-offset-4 hover:text-foreground">
          GitHub
        </a>{" "}
        para quem quiser ver como funciona.
      </>
    ),
  },
  {
    question: "Posso usar com jogos que têm anti-cheat?",
    answer: (
      <>
        O overlay mede o FPS pelos eventos do próprio Windows (ETW), do mesmo jeito que o PresentMon, e <strong className={strong}>não injeta nada no jogo</strong>: ele é uma
        janela transparente por cima, que ignora cliques. Por isso não aparece em tela cheia exclusiva — use o modo janela sem borda. Mesmo assim, cada jogo tem as próprias regras;
        na dúvida, confira as do seu.
      </>
    ),
  },
  {
    question: "Precisa rodar como administrador?",
    answer: (
      <>
        Sim. O Windows só libera a leitura dos sensores de baixo nível (temperatura, consumo, clocks) e os ajustes do sistema para programas com permissão de administrador. O app
        pede ao abrir. Se você ligar <strong className={strong}>Iniciar com o Windows</strong>, ele abre direto na bandeja, sem a pergunta do UAC.
      </>
    ),
  },
  {
    question: "Por que o Windows mostra um aviso ao instalar?",
    answer: (
      <>
        O instalador ainda não tem assinatura digital paga, então o SmartScreen mostra <q>O Windows protegeu o computador</q>. Clique em{" "}
        <strong className={strong}>Mais informações</strong> e em <strong className={strong}>Executar assim mesmo</strong>. Isso só acontece com o arquivo baixado pelo navegador;
        as atualizações feitas pelo próprio app não passam por esse aviso.
      </>
    ),
  },
  {
    question: "Como o app se atualiza?",
    answer: (
      <>
        Ele procura versão nova uns 30 segundos depois de abrir e a cada 12 horas. Quando encontra, mostra um aviso; <strong className={strong}>ATUALIZAR AGORA</strong> baixa o
        instalador, confere o SHA-256 publicado na versão e instala sozinho — o app fecha e abre de novo já atualizado. Dá para desligar em Sobre.
      </>
    ),
  },
  {
    question: "Funciona em notebook?",
    answer: (
      <>
        Sim. O Modo jogo foi pensado para notebooks gamer como o Dell G15, e em Dell e Alienware dá para trocar o modo térmico. No notebook, o limite de energia da GPU fica
        bloqueado (quem controla é o Dynamic Boost), mas o resto do overclock funciona.
      </>
    ),
  },
  {
    question: "Tenho placa AMD ou Intel. Funciona?",
    answer: (
      <>
        A maior parte do app funciona com qualquer marca: sensores, fichas, benchmarks, otimizações e Modo jogo. Só a gravação de overclock é para NVIDIA; em AMD e Intel, o app
        mostra os dados e aponta o AMD Software ou o Intel Graphics Software.
      </>
    ),
  },
  {
    question: "Como desinstalar?",
    answer: (
      <>
        Em <strong className={strong}>Configurações › Aplicativos</strong>, como qualquer programa. Suas configurações ficam guardadas em{" "}
        <code className="font-mono text-foreground">%AppData%\NitroHub</code>, caso você instale de novo.
      </>
    ),
  },
];
