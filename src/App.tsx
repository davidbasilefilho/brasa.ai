import "./index.css";
import {
	Bot,
	Code2,
	Cpu,
	Database,
	Gauge,
	Globe,
	Layers,
	Merge,
	Monitor,
	Plug,
	Puzzle,
	Rocket,
	SquareTerminal,
	Terminal as TerminalIcon,
	Wand2,
} from "lucide-react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import {
	Badge,
	BrasaTabs,
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./components";
import { cn } from "./components/utils/cn";
import { accents, tokens } from "./components/utils/theme";

function App() {
	// Dados dos benchmarks (AA Index)
	// Metodologia AA atualizada; novos valores aproximam-se do gráfico de referência.
	const intelligenceIndex = [
		{ modelo: "GPT-5 (high)", score: 69 },
		{ modelo: "GPT-5 (medium)", score: 68 },
		{ modelo: "Grok 4", score: 68 },
		{ modelo: "Gemini 2.5 Pro", score: 65 },
		{ modelo: "GPT-5-mini", score: 64 },
		{ modelo: "Qwen3 235B 2507", score: 64 },
		{ modelo: "brasa-72b", score: 67 },
		{ modelo: "brasa-mini-32b", score: 63 },
		{ modelo: "brasa-nano-8b", score: 58 },
		{ modelo: "DeepSeek R1 0528", score: 59 },
		{ modelo: "GLM-4.5", score: 56 },
		{ modelo: "Claude 4 Opus", score: 55 },
	];

	const throughputNvidia = [
		{ modelo: "brasa-nano-8b", tps: 842 },
		{ modelo: "brasa-mini-32b", tps: 623 },
		{ modelo: "brasa-72b", tps: 442 },
		{ modelo: "GPT-5-mini", tps: 151 },
		{ modelo: "GPT-5 (high)", tps: 126 },
		{ modelo: "GPT-5 (medium)", tps: 126 },
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

	// Brand detection and colors for charts
	const getBrand = (modelo: string) => {
		const m = modelo.toLowerCase();
		if (m.startsWith("brasa")) return "brasa";
		if (m.includes("grok")) return "grok";
		if (m.includes("gemini")) return "gemini";
		if (m === "o3" || m.includes("openai") || m.includes("gpt-5"))
			return "openai";
		if (m.includes("qwen")) return "qwen";
		if (m.includes("deepseek")) return "deepseek";
		if (m.includes("glm")) return "glm";
		if (m.includes("claude")) return "claude";
		return "other";
	};

	const brandColors: Record<string, string> = {
		brasa: "#34d399", // emerald-400 (project standard)
		grok: "#a78bfa", // indigo-400
		gemini: "#fde047", // yellow-300
		openai: "#60a5fa", // blue-400
		qwen: "#5eead4", // teal-300
		deepseek: "#f472b6", // pink-400
		glm: "#fb923c", // orange-400
		claude: "#fb7185", // rose-400
		other: "#94a3b8", // slate-400 fallback
	};

	const brandColor = (modelo: string) =>
		brandColors[getBrand(modelo)] ?? brandColors.other;

	// Tooltip customizado para melhor legibilidade
	type CustomTooltipProps = {
		active?: boolean;
		payload?: ReadonlyArray<{
			name?: string;
			value?: number | string;
			payload?: Record<string, unknown>;
		}>;
	};
	const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
		if (!active || !payload || payload.length === 0) return null;
		const first = payload[0];
		const name = (first.name ?? "") as string;
		const value = (first.value ?? "") as number | string;
		const row = (first.payload ?? {}) as { modelo?: string };
		const modelo = row?.modelo ?? "";
		const color = modelo ? brandColor(modelo) : "#34d399";
		const isScore = name === "AA Index";

		return (
			<div className="rounded-radius-radius border border-white/10 bg-[#03111c] p-3 shadow-lg min-w-[12rem]">
				<div className="flex items-center gap-2 text-[13px] text-neutral-300 mb-2">
					<span
						className="inline-block size-2 rounded-full"
						style={{ backgroundColor: color }}
					/>
					<span className="truncate">{modelo}</span>
				</div>
				<div className="flex items-center justify-between gap-3">
					<div className="flex items-center gap-2 text-xs text-neutral-400">
						{isScore ? (
							<Gauge className="size-3.5" style={{ color }} />
						) : (
							<Rocket className="size-3.5" style={{ color }} />
						)}
						<span>{name}</span>
					</div>
					<div className="text-base font-semibold text-white">
						{typeof value === "number" ? value.toLocaleString() : value}
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className={cn("min-h-dvh bg-panel-bg", tokens.text.base)}>
			{/* Header */}
			<header
				className={cn(
					"sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-panel-bg)_70%,transparent)]",
					"border-b",
					tokens.border,
				)}
			>
				<div
					className={cn(
						"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
					)}
				>
					<div className="flex items-center gap-3">
						<div
							className={cn(
								"size-8 grid place-items-center",
								tokens.rounded,
								accents.emerald.bg,
							)}
						>
							<span className="text-emerald-400 font-black">BA</span>
						</div>
						<span className="font-semibold tracking-tight">BrasaAI</span>
						<span
							className={cn(
								"ml-3 text-xs px-1.5 py-0.5",
								tokens.text.muted,
								tokens.rounded,
								tokens.border,
							)}
						>
							Laboratório Brasileiro de IA
						</span>
					</div>
					<nav
						className={cn(
							"hidden md:flex items-center gap-6 text-sm",
							tokens.text.muted,
						)}
					>
						<a href="#produtos" className="hover:text-white transition-colors">
							Produtos
						</a>
						<a href="#modelos" className="hover:text-white transition-colors">
							Modelos
						</a>
						<a
							href="#benchmarks"
							className="hover:text-white transition-colors"
						>
							Benchmarks
						</a>
						<a
							href="#metodologia"
							className="hover:text-white transition-colors"
						>
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
					<div className="grid gap-10">
						<div>
							<div
								className={cn(
									"inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs",
									tokens.rounded,
									tokens.border,
									accents.neutral.bg,
									tokens.text.muted,
								)}
							>
								<span
									className={cn("size-2", tokens.rounded, "bg-emerald-400")}
								/>
								Feito no Brasil • Aberto a parcerias com empresas
							</div>
							<h1
								className={cn(
									"mt-4 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]",
									tokens.text.base,
								)}
							>
								BrasaAI
								<span
									className={cn(
										"block text-transparent bg-clip-text bg-gradient-to-r",
										accents.emerald.bg,
										accents.yellow.bg,
										accents.blue.bg,
									)}
								>
									Laboratório de IA do Brasil
								</span>
							</h1>
							<p
								className={cn(
									"mt-6 text-lg leading-relaxed",
									tokens.text.muted,
								)}
							>
								Pesquisa, engenharia e produtos de IA com foco em agentes. Do
								protótipo à produção, construímos sistemas conectados a
								ferramentas, com alto throughput e desempenho competitivo
								globalmente.
							</p>
							<div className="mt-8 flex flex-wrap gap-3">
								<Button asChild color="emerald" size="md" variant="solid">
									<a href="#produtos">Comece agora</a>
								</Button>
								<Button asChild color="yellow" size="md" variant="tinted">
									<a href="#empresas">Soluções para Empresas</a>
								</Button>
								<Button asChild color="blue" size="md" variant="tinted">
									<a href="#benchmarks">Ver Benchmarks</a>
								</Button>
							</div>
							<div
								className={cn(
									"mt-6 flex flex-wrap items-center gap-4 text-xs",
									tokens.text.muted,
								)}
							>
								<span
									className={cn(
										tokens.rounded,
										tokens.border,
										"bg-white/5 px-2 py-1",
									)}
								>
									Agentic by default
								</span>
								<span className="rounded-radius-radius border border-white/10 bg-white/5 px-2 py-1">
									Ferramentas MCP
								</span>
								<span className="rounded-radius-radius border border-white/10 bg-white/5 px-2 py-1">
									REPL & Terminal
								</span>
								<span className="rounded-radius-radius border border-white/10 bg-white/5 px-2 py-1">
									Web crawling
								</span>
							</div>
						</div>
						{/* right column intentionally empty (removed demo/screenshot) */}
					</div>
				</div>
			</section>

			{/* Produtos */}
			<section
				id="produtos"
				className={cn("border-t", tokens.border, "bg-panel-muted-bg")}
			>
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
							className={cn(
								"hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold hover:bg-emerald-300",
								tokens.rounded,
								accents.emerald.bg,
							)}
						>
							Fale com vendas
						</a>
					</div>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
						<Card
							className={cn(
								"transition duration-150 hover:-translate-y-0.5 flex h-full flex-col gap-4 bg-white/5 hover:bg-white/10",
							)}
						>
							<CardHeader>
								<div>
									<CardTitle className="flex items-center gap-2">
										<Bot className="size-4 text-emerald-300" />
										Brasa Chat
									</CardTitle>
									<CardDescription>
										Chatbot agentico por padrão, com browser virtual, API de web
										scraping/crawl, terminal, REPL e acesso a ferramentas MCP
										(Model Context Protocol).
									</CardDescription>
								</div>
								<Badge color="emerald">Web</Badge>
							</CardHeader>
							<CardContent className="mt-auto">
								<ul
									className={cn(
										"grid grid-cols-2 gap-2 text-xs",
										tokens.text.muted,
									)}
								>
									<li
										className={cn(
											"flex items-center gap-2 px-2.5 py-1.5",
											tokens.rounded,
											tokens.border,
											"bg-[#061826]",
										)}
									>
										<Monitor className="size-3.5 text-emerald-300/80" />
										<span>Browser virtual</span>
									</li>
									<li className="flex items-center gap-2 rounded-radius-radius border border-white/10 bg-[#061826] px-2.5 py-1.5">
										<Globe className="size-3.5 text-blue-300/80" />
										<span>Web crawl API</span>
									</li>
									<li className="flex items-center gap-2 rounded-radius-radius border border-white/10 bg-[#061826] px-2.5 py-1.5">
										<TerminalIcon className="size-3.5 text-yellow-300/80" />
										<span>Terminal</span>
									</li>
									<li className="flex items-center gap-2 rounded-radius-radius border border-white/10 bg-[#061826] px-2.5 py-1.5">
										<Code2 className="size-3.5 text-indigo-300/80" />
										<span>REPL</span>
									</li>
									<li className="flex items-center gap-2 rounded-radius-radius border border-white/10 bg-[#061826] px-2.5 py-1.5">
										<Plug className="size-3.5 text-emerald-300/80" />
										<span>Ferramentas MCP</span>
									</li>
									<li className="flex items-center gap-2 rounded-radius-radius border border-white/10 bg-[#061826] px-2.5 py-1.5">
										<Wand2 className="size-3.5 text-pink-300/80" />
										<span>Tool-use avançado</span>
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card
							className={cn(
								"transition duration-150 hover:-translate-y-0.5 flex h-full flex-col gap-4 bg-white/5 hover:bg-white/10",
							)}
						>
							<CardHeader>
								<div>
									<CardTitle className="flex items-center gap-2">
										<SquareTerminal className="size-4 text-blue-300" />
										Brasa CLI
									</CardTitle>
									<CardDescription>
										Ferramenta de CLI agentica para criação de código, com
										suporte a MCP, REPL, terminal, API de web scraping/crawl e
										integração com LSP (Language Server Protocol).
									</CardDescription>
								</div>
								<Badge color="blue">CLI</Badge>
							</CardHeader>
							<CardContent className="mt-auto">
								<ul
									className={cn(
										"grid grid-cols-2 gap-2 text-xs",
										tokens.text.muted,
									)}
								>
									<li
										className={cn(
											"flex items-center gap-2 px-2.5 py-1.5",
											tokens.rounded,
											tokens.border,
											"bg-[#061826]",
										)}
									>
										<Code2 className="size-3.5 text-blue-300/80" />
										<span>Codegen agentic</span>
									</li>
									<li className="flex items-center gap-2 rounded-radius-radius border border-white/10 bg-[#061826] px-2.5 py-1.5">
										<Cpu className="size-3.5 text-emerald-300/80" />
										<span>Integração LSP</span>
									</li>
									<li className="flex items-center gap-2 rounded-radius-radius border border-white/10 bg-[#061826] px-2.5 py-1.5">
										<TerminalIcon className="size-3.5 text-yellow-300/80" />
										<span>REPL & Terminal</span>
									</li>
									<li className="flex items-center gap-2 rounded-radius-radius border border-white/10 bg-[#061826] px-2.5 py-1.5">
										<Globe className="size-3.5 text-blue-300/80" />
										<span>Web crawl API</span>
									</li>
									<li className="flex items-center gap-2 rounded-radius-radius border border-white/10 bg-[#061826] px-2.5 py-1.5">
										<Plug className="size-3.5 text-emerald-300/80" />
										<span>Ferramentas MCP</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
			{/* Modelos */}
			<section
				id="modelos"
				className={cn("border-t", tokens.border, "bg-panel-bg")}
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
					<div className="flex items-end justify-between gap-4">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold tracking-tight">
								Modelos
							</h2>
							<p className="mt-2 text-neutral-300 max-w-3xl">
								Famílias de modelos otimizados para agentes, raciocínio e
								tool-use. Suporte a quantizações e execução eficiente em
								múltiplos hardwares (CPU, GPU, Mobile e Edge).
							</p>
						</div>
						<div className={cn("hidden md:flex items-center gap-2 text-xs")}>
							<span
								className={cn(
									tokens.rounded,
									tokens.border,
									accents.emerald.bg,
									"px-2 py-1 text-emerald-200 transition-colors hover:bg-emerald-400/15",
								)}
							>
								Agentic
							</span>
							<span
								className={cn(
									tokens.rounded,
									tokens.border,
									accents.blue.bg,
									"px-2 py-1 text-blue-200 transition-colors hover:bg-blue-400/15",
								)}
							>
								Ferramentas
							</span>
							<span
								className={cn(
									tokens.rounded,
									tokens.border,
									accents.yellow.bg,
									"px-2 py-1 text-yellow-100 transition-colors hover:bg-yellow-300/15",
								)}
							>
								Longo contexto
							</span>
						</div>
					</div>

					<div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
						{[
							{
								name: "brasa-nano-8b",
								size: "8B",
								ctx: "Janela de contexto 10M tokens",
								color: "emerald" as const,
							},
							{
								name: "brasa-mini-32b",
								size: "32B",
								ctx: "Janela de contexto 15M tokens",
								color: "blue" as const,
							},
							{
								name: "brasa-72b",
								size: "72B",
								ctx: "Janela de contexto 25M tokens",
								color: "yellow" as const,
							},
						].map((m) => (
							<Card
								key={m.name}
								className={cn(
									"group relative overflow-hidden transition hover:-translate-y-0.5 duration-150 border border-border bg-white/5",
								)}
								interactive
							>
								{/* accent */}
								<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
								<CardHeader className="flex-row items-start justify-between gap-4">
									<div>
										<CardTitle className="flex items-center gap-2">
											<Cpu className="size-4 text-neutral-300" />
											{m.name}
										</CardTitle>
										<CardDescription className="mt-1">
											instruct • tools • reasoning
										</CardDescription>
									</div>
									<Badge color={m.color}>{m.size}</Badge>
								</CardHeader>
								<CardContent className="space-y-4">
									<ul
										className={cn(
											"grid grid-cols-1 gap-2 text-sm",
											tokens.text.muted,
										)}
									>
										<li
											className={cn(
												"flex items-center gap-2 px-2.5 py-2 rounded border border-white/10 bg-[#061826]",
											)}
										>
											<Gauge className="size-4 text-emerald-300/80" />
											<span>{m.ctx}</span>
										</li>
										<li className="flex items-center gap-2 rounded border border-white/10 bg-[#061826] px-2.5 py-2">
											<Puzzle className="size-4 text-blue-300/80" />
											<span>Tool-use avançado e MCP</span>
										</li>
										<li className="flex items-center gap-2 rounded border border-white/10 bg-[#061826] px-2.5 py-2">
											<Cpu className="size-4 text-yellow-300/80" />
											<span>Execução eficiente: CPU, GPU, Mobile, Edge</span>
										</li>
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Benchmarks */}
			<section
				id="benchmarks"
				className={cn("border-t", tokens.border, "bg-panel-muted-bg")}
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
							className="hidden md:inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-neutral-200 hover:bg-white/10"
						>
							Metodologia
						</a>
					</div>

					<div
						className={cn(
							"mt-8 p-4 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)]",
						)}
					>
						<BrasaTabs.Root
							defaultValue="aa-index"
							className="flex flex-col gap-4"
						>
							<BrasaTabs.List className="inline-flex w-fit">
								<BrasaTabs.Tab value="aa-index" color="emerald">
									AA Index
								</BrasaTabs.Tab>
								<BrasaTabs.Tab value="nvidia" color="blue">
									NVIDIA GPU
								</BrasaTabs.Tab>
								<BrasaTabs.Tab value="tpu" color="yellow">
									Google TPU
								</BrasaTabs.Tab>
								<BrasaTabs.Tab value="groq" color="indigo">
									Groq LPU
								</BrasaTabs.Tab>
								<BrasaTabs.Tab value="cerebras" color="emerald">
									Cerebras WSE
								</BrasaTabs.Tab>
							</BrasaTabs.List>

							<BrasaTabs.Panel value="aa-index">
								<div className="h-80 md:h-96">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={intelligenceIndex}
											margin={{ top: 8, right: 16, left: 8, bottom: 48 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												angle={-25}
												textAnchor="end"
												interval={0}
												tickMargin={14}
												height={48}
											/>
											<YAxis
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												domain={[0, 100]}
											/>
											<Tooltip
												content={<CustomTooltip />}
												cursor={{ fill: "rgba(3, 17, 28, 0.45)" }}
											/>
											<Bar
												dataKey="score"
												name="AA Index"
												radius={[4, 4, 0, 0]}
											>
												{intelligenceIndex.map((d, i) => (
													<Cell key={`aa-${i}`} fill={brandColor(d.modelo)} />
												))}
											</Bar>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</BrasaTabs.Panel>

							<BrasaTabs.Panel value="nvidia">
								<div className="h-80 md:h-96">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={throughputNvidia}
											margin={{ top: 8, right: 16, left: 8, bottom: 40 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												angle={-25}
												textAnchor="end"
												interval={0}
												tickMargin={14}
												height={44}
											/>
											<YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} />
											<Tooltip
												content={<CustomTooltip />}
												cursor={{ fill: "rgba(3, 17, 28, 0.45)" }}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												radius={[4, 4, 0, 0]}
											>
												{throughputNvidia.map((d, i) => (
													<Cell key={`nv-${i}`} fill={brandColor(d.modelo)} />
												))}
											</Bar>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</BrasaTabs.Panel>

							<BrasaTabs.Panel value="tpu">
								<div className="h-80 md:h-96">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={throughputTPU}
											margin={{ top: 8, right: 16, left: 8, bottom: 40 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												angle={-25}
												textAnchor="end"
												interval={0}
												tickMargin={14}
												height={44}
											/>
											<YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} />
											<Tooltip
												content={<CustomTooltip />}
												cursor={{ fill: "rgba(3, 17, 28, 0.45)" }}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												radius={[4, 4, 0, 0]}
											>
												{throughputTPU.map((d, i) => (
													<Cell key={`tpu-${i}`} fill={brandColor(d.modelo)} />
												))}
											</Bar>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</BrasaTabs.Panel>

							<BrasaTabs.Panel value="groq">
								<div className="h-80 md:h-96">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={throughputGroq}
											margin={{ top: 8, right: 16, left: 8, bottom: 40 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												angle={-25}
												textAnchor="end"
												interval={0}
												tickMargin={14}
												height={44}
											/>
											<YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} />
											<Tooltip
												content={<CustomTooltip />}
												cursor={{ fill: "rgba(3, 17, 28, 0.45)" }}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												radius={[4, 4, 0, 0]}
											>
												{throughputGroq.map((d, i) => (
													<Cell key={`groq-${i}`} fill={brandColor(d.modelo)} />
												))}
											</Bar>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</BrasaTabs.Panel>

							<BrasaTabs.Panel value="cerebras">
								<div className="h-80 md:h-96">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={throughputCerebras}
											margin={{ top: 8, right: 16, left: 8, bottom: 40 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												angle={-25}
												textAnchor="end"
												interval={0}
												tickMargin={14}
												height={44}
											/>
											<YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} />
											<Tooltip
												content={<CustomTooltip />}
												cursor={{ fill: "rgba(3, 17, 28, 0.45)" }}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												radius={[4, 4, 0, 0]}
											>
												{throughputCerebras.map((d, i) => (
													<Cell key={`cer-${i}`} fill={brandColor(d.modelo)} />
												))}
											</Bar>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</BrasaTabs.Panel>
						</BrasaTabs.Root>
					</div>
				</div>
			</section>

			{/* Metodologia */}
			<section
				id="metodologia"
				className={cn("border-t", tokens.border, "bg-panel-bg")}
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

					{/* 4 steps */}
					<div className="mt-10 grid gap-5 md:grid-cols-4">
						<Card
							className={cn(
								"relative overflow-hidden transition-transform duration-150 hover:-translate-y-0.5 border border-white/10 bg-white/5",
							)}
							interactive
						>
							<div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0" />
							<CardHeader>
								<div className="flex flex-col gap-1.5">
									<div className="flex items-center gap-3">
										<div className="grid size-8 place-items-center rounded border border-white/10 bg-emerald-400/10">
											<Layers className="size-4 text-emerald-300" />
										</div>
										<CardTitle className="text-base">HRM</CardTitle>
									</div>
									<CardDescription className="mt-0">
										Planejamento (h-module) desacoplado da execução (l-module)
										para reduzir complexidade e elevar raciocínio.
									</CardDescription>
								</div>
							</CardHeader>
						</Card>

						<Card
							className="relative overflow-hidden border-white/10 bg-white/5 transition-transform duration-150 hover:-translate-y-0.5"
							interactive
						>
							<div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0" />
							<CardHeader>
								<div className="flex flex-col gap-1.5">
									<div className="flex items-center gap-3">
										<div className="grid size-8 place-items-center rounded border border-white/10 bg-blue-400/10">
											<Database className="size-4 text-blue-300" />
										</div>
										<CardTitle className="text-base">Memória Atlas</CardTitle>
									</div>
									<CardDescription className="mt-0">
										Curto/Longo prazo + Persistente para manter contexto amplo
										(&gt;10M) e consolidar conhecimento.
									</CardDescription>
								</div>
							</CardHeader>
						</Card>

						<Card
							className="relative overflow-hidden border-white/10 bg-white/5 transition-transform duration-150 hover:-translate-y-0.5"
							interactive
						>
							<div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-yellow-300/0 via-yellow-300/60 to-yellow-300/0" />
							<CardHeader>
								<div className="flex flex-col gap-1.5">
									<div className="flex items-center gap-3">
										<div className="grid size-8 place-items-center rounded border border-white/10 bg-yellow-300/10">
											<Merge className="size-4 text-yellow-200" />
										</div>
										<CardTitle className="text-base">Early Fusion</CardTitle>
									</div>
									<CardDescription className="mt-0">
										Integra texto/imagem/áudio desde camadas iniciais em um
										vetor unificado para correlações profundas.
									</CardDescription>
								</div>
							</CardHeader>
						</Card>

						<Card
							className="relative overflow-hidden border-white/10 bg-white/5 transition-transform duration-150 hover:-translate-y-0.5"
							interactive
						>
							<div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-400/0 via-indigo-400/50 to-indigo-400/0" />
							<CardHeader>
								<div className="flex flex-col gap-1.5">
									<div className="flex items-center gap-3">
										<div className="grid size-8 place-items-center rounded border border-white/10 bg-indigo-400/10">
											<Rocket className="size-4 text-indigo-300" />
										</div>
										<CardTitle className="text-base">
											Inferência + Treino
										</CardTitle>
									</div>
									<CardDescription className="mt-0">
										Diffusion-LM para paralelizar geração; MoE para
										especialistas; ciclo Absolute Zero (Self-Play, RLVR, GSPO).
									</CardDescription>
								</div>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* Empresas CTA */}
			<section
				id="empresas"
				className={cn(
					"border-t border-border bg-gradient-to-br from-[color-mix(in_oklab,var(--color-panel-bg)_90%,#0a2233)] via-[color-panel-bg] to-[color-mix(in_oklab,var(--color-panel-bg)_80%,#0b2a3f)]",
				)}
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
					<div
						className={cn(
							"p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center",
							tokens.roundedXl,
							tokens.border,
							accents.neutral.bg,
						)}
					>
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
								className="inline-flex items-center gap-2 rounded-radius-radius bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-black hover:bg-emerald-300 transition-colors"
							>
								Fale com vendas
							</a>
							<a
								href="#docs"
								className="inline-flex items-center gap-2 rounded-radius-radius border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-neutral-200 hover:bg-white/10 transition-colors"
							>
								Ler documentação
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className={cn("border-t", tokens.border, "bg-panel-bg")}>
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
