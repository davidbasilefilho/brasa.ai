import "./index.css";
import React from "react";
import { Tabs } from "@base-ui-components/react/tabs";
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	BarChart,
	Bar,
	Legend,
} from "recharts";

function App() {
	// Dados dos benchmarks (Documento Técnico)
	const intelligenceIndex = [
		{ modelo: "brasa-72b", score: 90 },
		{ modelo: "brasa-mini-32b", score: 86 },
		{ modelo: "brasa-nano-8b", score: 78 },
		{ modelo: "Grok 4", score: 73 },
		{ modelo: "Gemini 2.5 Pro", score: 70 },
		{ modelo: "o3", score: 70 },
		{ modelo: "Qwen3 235B 2507", score: 69 },
		{ modelo: "DeepSeek R1 0528", score: 68 },
		{ modelo: "GLM-4.5", score: 66 },
		{ modelo: "Claude 4 Opus", score: 64 },
	];

	const throughputNvidia = [
		{ modelo: "brasa-nano-8b", tps: 842 },
		{ modelo: "brasa-mini-32b", tps: 623 },
		{ modelo: "brasa-72b", tps: 442 },
		{ modelo: "DeepSeek R1 0528", tps: 268 },
		{ modelo: "GLM-4.5", tps: 100 },
		{ modelo: "Qwen3 235B", tps: 74 },
		{ modelo: "Claude 4 Opus", tps: 60 },
		{ modelo: "Grok 4", tps: 58 },
	];

	const throughputTPU = [
		{ modelo: "brasa-nano-8b", tps: 1217 },
		{ modelo: "brasa-mini-32b", tps: 953 },
		{ modelo: "brasa-72b", tps: 651 },
		{ modelo: "Gemini 2.5 Pro", tps: 146 },
	];

	const throughputGroq = [
		{ modelo: "brasa-nano-8b", tps: 1773 },
		{ modelo: "brasa-mini-32b", tps: 1232 },
		{ modelo: "brasa-72b", tps: 838 },
	];

	const throughputCerebras = [
		{ modelo: "brasa-nano-8b", tps: 4555 },
		{ modelo: "brasa-mini-32b", tps: 3308 },
		{ modelo: "brasa-72b", tps: 2599 },
		{ modelo: "Qwen3 235B", tps: 1357 },
	];

	return (
		<div className="min-h-dvh bg-[#061826] text-neutral-100">
			{/* Header */}
			<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#061826]/70 border-b border-white/10">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="size-8 rounded bg-emerald-500/20 grid place-items-center">
							<span className="text-emerald-400 font-black">BA</span>
						</div>
						<span className="font-semibold tracking-tight">BrasaAI</span>
						<span className="ml-3 text-xs text-neutral-300/80 border border-white/10 rounded px-1.5 py-0.5">
							Laboratório Brasileiro de IA
						</span>
					</div>
					<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-200">
						<a href="#produtos" className="hover:text-white">
							Produtos
						</a>
						<a href="#modelos" className="hover:text-white">
							Modelos
						</a>
						<a href="#benchmarks" className="hover:text-white">
							Benchmarks
						</a>
						<a href="#metodologia" className="hover:text-white">
							Pesquisa
						</a>
					</nav>
				</div>
			</header>

			{/* Hero */}
			<section className="relative overflow-hidden">
				{/* Brazilian palette aurora background: blue base with green/yellow waves */}
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(16,185,129,0.18),transparent_60%)]" />
					<div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(250,204,21,0.14),transparent_40%)] blur-2xl" />
					<div className="absolute -bottom-24 -right-24 h-[40rem] w-[40rem] rounded-full bg-[conic-gradient(from_220deg_at_50%_50%,rgba(59,130,246,0.18),transparent_45%)] blur-2xl" />
				</div>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
					<div className="grid md:grid-cols-2 items-center gap-10">
						<div>
							<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
								<span className="size-2 rounded-full bg-emerald-400" />
								Feito no Brasil • Aberto a parcerias com empresas
							</div>
							<h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
								BrasaAI
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-300 to-blue-400">
									Laboratório de IA do Brasil
								</span>
							</h1>
							<p className="mt-6 text-neutral-200/90 text-lg leading-relaxed">
								Pesquisa, engenharia e produtos de IA com foco em agentes. Do
								protótipo à produção, construímos sistemas conectados a
								ferramentas, com alto throughput e desempenho competitivo
								globalmente.
							</p>
							<div className="mt-8 flex flex-wrap gap-3">
								<a
									href="#produtos"
									className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-black hover:bg-emerald-300"
								>
									Comece agora
								</a>
								<a
									href="#empresas"
									className="inline-flex items-center gap-2 rounded-md border border-yellow-300/40 bg-yellow-300/10 px-4 py-2.5 text-sm font-semibold text-yellow-200 hover:bg-yellow-300/20"
								>
									Soluções para Empresas
								</a>
								<a
									href="#benchmarks"
									className="inline-flex items-center gap-2 rounded-md border border-blue-300/40 bg-blue-300/10 px-4 py-2.5 text-sm font-semibold text-blue-200 hover:bg-blue-300/20"
								>
									Ver Benchmarks
								</a>
							</div>
							<div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-300/90">
								<span className="rounded border border-white/10 bg-white/5 px-2 py-1">
									Agentic by default
								</span>
								<span className="rounded border border-white/10 bg-white/5 px-2 py-1">
									Ferramentas MCP
								</span>
								<span className="rounded border border-white/10 bg-white/5 px-2 py-1">
									REPL & Terminal
								</span>
								<span className="rounded border border-white/10 bg-white/5 px-2 py-1">
									Web crawling
								</span>
							</div>
						</div>
						<div className="relative">
							<div className="aspect-video rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_-40px_120px_-60px_rgba(16,185,129,0.25)_inset]">
								<div className="h-full w-full rounded-lg bg-[#03111c] grid place-items-center text-neutral-300 text-sm">
									Demo / Screenshot do Brasa Chat
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Produtos */}
			<section id="produtos" className="border-t border-white/10 bg-[#05121d]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
					<div className="flex items-end justify-between gap-4">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold tracking-tight">
								Produtos
							</h2>
							<p className="mt-2 text-neutral-300 max-w-2xl">
								Para desenvolvedores e empresas: ferramentas agenticas, prontas
								para produção.
							</p>
						</div>
						<a
							href="#empresas"
							className="hidden md:inline-flex items-center gap-2 rounded-md bg-emerald-400/90 px-3 py-2 text-sm font-semibold text-black hover:bg-emerald-300"
						>
							Fale com vendas
						</a>
					</div>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* 1. Brasa Chat */}
						<article className="rounded-xl border border-white/10 bg-white/5 p-6">
							<div className="flex items-start justify-between gap-4">
								<div>
									<h3 className="text-xl font-semibold">Brasa Chat</h3>
									<p className="mt-2 text-neutral-300">
										Chatbot agentico por padrão, com browser virtual, API de web
										scraping/crawl, terminal, REPL e acesso a ferramentas MCP
										(Model Context Protocol).
									</p>
								</div>
								<span className="shrink-0 rounded bg-emerald-400/15 px-2 py-1 text-xs font-semibold text-emerald-300 border border-emerald-400/30">
									Web
								</span>
							</div>
							<ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-neutral-300">
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									Browser virtual
								</li>
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									Web crawl API
								</li>
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									Terminal
								</li>
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									REPL
								</li>
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									Ferramentas MCP
								</li>
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									Tool-use avançado
								</li>
							</ul>
						</article>

						{/* 2. Brasa CLI */}
						<article className="rounded-xl border border-white/10 bg-white/5 p-6">
							<div className="flex items-start justify-between gap-4">
								<div>
									<h3 className="text-xl font-semibold">Brasa CLI</h3>
									<p className="mt-2 text-neutral-300">
										Ferramenta de CLI agentica para criação de código, com
										suporte a MCP, REPL, terminal, API de web scraping/crawl e
										integração com LSP (Language Server Protocol).
									</p>
								</div>
								<span className="shrink-0 rounded bg-blue-400/15 px-2 py-1 text-xs font-semibold text-blue-200 border border-blue-400/30">
									CLI
								</span>
							</div>
							<ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-neutral-300">
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									Codegen agentic
								</li>
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									Integração LSP
								</li>
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									REPL & Terminal
								</li>
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									Web crawl API
								</li>
								<li className="rounded border border-white/10 bg-[#061826] px-2.5 py-1.5">
									Ferramentas MCP
								</li>
							</ul>
						</article>
					</div>
				</div>
			</section>

			{/* Modelos */}
			<section id="modelos" className="border-t border-white/10 bg-[#061826]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">
						Modelos
					</h2>
					<p className="mt-4 text-neutral-300 max-w-3xl">
						Famílias de modelos otimizados para agentes, raciocínio e tool-use.
						Suporte a quantizações e execução eficiente em múltiplos hardwares
						(CPU, GPU, Mobile e Edge).
					</p>
					<div className="mt-8 grid gap-4 md:grid-cols-3">
						{[
							{ name: "brasa-nano-8b", ctx: "Janela de contexto 10M tokens" },
							{ name: "brasa-mini-32b", ctx: "Janela de contexto 15M tokens" },
							{ name: "brasa-72b", ctx: "Janela de contexto 25M tokens" },
						].map((m) => (
							<div
								key={m.name}
								className="rounded-lg border border-white/10 bg-white/5 p-5"
							>
								<div className="flex items-center justify-between">
									<h3 className="font-semibold">{m.name}</h3>
									<span className="text-xs text-neutral-300">
										instruct • tools
									</span>
								</div>
								<ul className="mt-3 text-sm text-neutral-300 space-y-1.5">
									<li>{m.ctx}</li>
									<li>Execução eficiente multi-hardware</li>
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benchmarks */}
			<section
				id="benchmarks"
				className="border-t border-white/10 bg-[#051b2b]"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
					<div className="flex items-end justify-between gap-4">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold tracking-tight">
								Benchmarks
							</h2>
							<p className="mt-2 text-neutral-300 max-w-3xl">
								Comparação na Artificial Analysis Intelligence Index e métricas
								de throughput/output speed em diferentes hardwares.
							</p>
						</div>
						<a
							href="#metodologia"
							className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-neutral-200 hover:bg-white/10"
						>
							Metodologia
						</a>
					</div>

					<div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
						<Tabs.Root defaultValue="iai" className="flex flex-col gap-4">
							<Tabs.List className="flex flex-wrap gap-2">
								<Tabs.Tab
									value="iai"
									className="rounded border border-white/10 bg-[#061826] px-3 py-1.5 text-sm data-[selected]:bg-emerald-400 data-[selected]:text-black"
								>
									IAI Score
								</Tabs.Tab>
								<Tabs.Tab
									value="nvidia"
									className="rounded border border-white/10 bg-[#061826] px-3 py-1.5 text-sm data-[selected]:bg-blue-400 data-[selected]:text-black"
								>
									NVIDIA GPU
								</Tabs.Tab>
								<Tabs.Tab
									value="tpu"
									className="rounded border border-white/10 bg-[#061826] px-3 py-1.5 text-sm data-[selected]:bg-yellow-300 data-[selected]:text-black"
								>
									Google TPU
								</Tabs.Tab>
								<Tabs.Tab
									value="groq"
									className="rounded border border-white/10 bg-[#061826] px-3 py-1.5 text-sm data-[selected]:bg-indigo-400 data-[selected]:text-black"
								>
									Groq LPU
								</Tabs.Tab>
								<Tabs.Tab
									value="cerebras"
									className="rounded border border-white/10 bg-[#061826] px-3 py-1.5 text-sm data-[selected]:bg-emerald-300 data-[selected]:text-black"
								>
									Cerebras WSE
								</Tabs.Tab>
							</Tabs.List>

							<Tabs.Panel value="iai">
								<div className="h-80">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={intelligenceIndex}
											margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												angle={-15}
												textAnchor="end"
												interval={0}
											/>
											<YAxis
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												domain={[0, 100]}
											/>
											<Tooltip
												contentStyle={{
													background: "#03111c",
													border: "1px solid #133042",
													color: "#e5e5e5",
												}}
											/>
											<Legend />
											<Bar
												dataKey="score"
												name="IAI"
												fill="#34d399"
												radius={[4, 4, 0, 0]}
											/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</Tabs.Panel>

							<Tabs.Panel value="nvidia">
								<div className="h-80">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={throughputNvidia}
											margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												angle={-15}
												textAnchor="end"
												interval={0}
											/>
											<YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} />
											<Tooltip
												contentStyle={{
													background: "#03111c",
													border: "1px solid #133042",
													color: "#e5e5e5",
												}}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												fill="#60a5fa"
												radius={[4, 4, 0, 0]}
											/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</Tabs.Panel>

							<Tabs.Panel value="tpu">
								<div className="h-80">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={throughputTPU}
											margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												angle={-15}
												textAnchor="end"
												interval={0}
											/>
											<YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} />
											<Tooltip
												contentStyle={{
													background: "#03111c",
													border: "1px solid #133042",
													color: "#e5e5e5",
												}}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												fill="#fde047"
												radius={[4, 4, 0, 0]}
											/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</Tabs.Panel>

							<Tabs.Panel value="groq">
								<div className="h-80">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={throughputGroq}
											margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												angle={-15}
												textAnchor="end"
												interval={0}
											/>
											<YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} />
											<Tooltip
												contentStyle={{
													background: "#03111c",
													border: "1px solid #133042",
													color: "#e5e5e5",
												}}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												fill="#a78bfa"
												radius={[4, 4, 0, 0]}
											/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</Tabs.Panel>

							<Tabs.Panel value="cerebras">
								<div className="h-80">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={throughputCerebras}
											margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												angle={-15}
												textAnchor="end"
												interval={0}
											/>
											<YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} />
											<Tooltip
												contentStyle={{
													background: "#03111c",
													border: "1px solid #133042",
													color: "#e5e5e5",
												}}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												fill="#34d399"
												radius={[4, 4, 0, 0]}
											/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</Tabs.Panel>
						</Tabs.Root>
					</div>
				</div>
			</section>

			{/* Metodologia */}
			<section
				id="metodologia"
				className="border-t border-white/10 bg-[#061826]"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">
						Como chegamos lá
					</h2>
					<p className="mt-4 text-neutral-300 max-w-3xl">
						A sinergia vem de quatro pilares integrados do documento técnico:
						HRM (planejamento no h-module e execução no l-module), memória Atlas
						(curto, longo prazo e persistente para contexto &gt;10M tokens),
						multimodalidade por Early Fusion (vetor unificado desde camadas
						iniciais) e inferência acelerada (Diffusion-LM + MoE). Isso é
						continuamente aprimorado pelo ciclo Absolute Zero (Self-Play, RLVR e
						GSPO), elevando o raciocínio sem depender de dados humanos.
					</p>
					<div className="mt-8 grid gap-4 md:grid-cols-4">
						<div className="rounded-lg border border-white/10 bg-white/5 p-5">
							<h3 className="font-semibold">HRM</h3>
							<p className="mt-2 text-sm text-neutral-300">
								Desacopla planejamento (h-module) da execução (l-module),
								reduzindo complexidade e melhorando raciocínio.
							</p>
						</div>
						<div className="rounded-lg border border-white/10 bg-white/5 p-5">
							<h3 className="font-semibold">Memória Atlas</h3>
							<p className="mt-2 text-sm text-neutral-300">
								Curto/Longo prazo + Persistente para manter contexto amplo e
								resumir conhecimento consolidado.
							</p>
						</div>
						<div className="rounded-lg border border-white/10 bg-white/5 p-5">
							<h3 className="font-semibold">Early Fusion</h3>
							<p className="mt-2 text-sm text-neutral-300">
								Integra texto/imagem/áudio cedo, aprendendo correlações
								profundas em um espaço vetorial unificado.
							</p>
						</div>
						<div className="rounded-lg border border-white/10 bg-white/5 p-5">
							<h3 className="font-semibold">Inferência + Treino</h3>
							<p className="mt-2 text-sm text-neutral-300">
								Diffusion-LM paraleliza geração; MoE ativa especialistas;
								Absolute Zero (Self-Play, RLVR, GSPO) fecha o ciclo de melhoria.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Empresas CTA */}
			<section
				id="empresas"
				className="border-t border-white/10 bg-gradient-to-br from-[#072233] via-[#062233] to-[#0b2a3f]"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
					<div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
						<div>
							<h3 className="text-2xl font-bold tracking-tight">
								Parcerias e soluções sob medida
							</h3>
							<p className="mt-2 text-neutral-300">
								Integre agentes ao seu produto. Oferecemos POCs rápidas, SLAs e
								suporte dedicado.
							</p>
						</div>
						<div className="flex flex-wrap gap-3 md:justify-end">
							<a
								href="#contato"
								className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-black hover:bg-emerald-300"
							>
								Fale com vendas
							</a>
							<a
								href="#docs"
								className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-neutral-200 hover:bg-white/10"
							>
								Ler documentação
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-white/10 bg-[#061826]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-300 flex flex-col md:flex-row items-center justify-between gap-4">
					<span>© {new Date().getFullYear()} BrasaAI • Feito no Brasil</span>
					<div className="flex items-center gap-4">
						<a className="hover:text-neutral-100" href="#contato">
							Contato
						</a>
						<a className="hover:text-neutral-100" href="#docs">
							Docs
						</a>
						<a className="hover:text-neutral-100" href="#">
							GitHub
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
