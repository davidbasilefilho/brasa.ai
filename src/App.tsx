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
	TooltipPanel,
} from "./components";
import { cn } from "./components/utils/cn";
import { accents, tokens } from "./components/utils/theme";
import { type ReactNode } from "react";

function App() {
	// Consistent layout helpers
	const container = cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8");
	const sectionY = "py-16 md:py-24";
	const sectionTitle = "text-2xl md:text-3xl font-bold tracking-tight";
	const sectionDesc = cn("mt-2", tokens.text.muted);

	const headerNav: { label: ReactNode; href: string }[] = [
		{ label: <>Produtos</>, href: "#produtos" },
		{ label: <>Modelos</>, href: "#modelos" },
		{ label: <>Benchmarks</>, href: "#benchmarks" },
		{ label: <>Pesquisa</>, href: "#metodologia" },
	];

	const heroCtas: {
		label: ReactNode;
		href: string;
		color: "emerald" | "yellow" | "blue";
		variant: "solid" | "tinted";
	}[] = [
		{
			label: <>Comece agora</>,
			href: "#produtos",
			color: "emerald",
			variant: "solid",
		},
		{
			label: <>Soluções para Empresas</>,
			href: "#empresas",
			color: "yellow",
			variant: "tinted",
		},
		{
			label: <>Ver Benchmarks</>,
			href: "#benchmarks",
			color: "blue",
			variant: "tinted",
		},
	];
	const heroBadges: { label: ReactNode }[] = [
		{ label: <>Agente por padrão</> },
		{ label: <>Ferramentas MCP</> },
		{ label: <>REPL & Terminal</> },
		{ label: <>Rastreamento Web</> },
	];

	const products: {
		title: ReactNode;
		description: ReactNode;
		badge: { color: "emerald" | "blue"; label: ReactNode };
		icon: React.FC<{ className?: string }>;
		features: {
			icon: React.FC<{ className?: string }>;
			label: ReactNode;
			iconColorClass: string;
		}[];
		cardColorClass: string;
	}[] = [
		{
			title: (
				<>
					<Bot className="size-4 text-emerald-300" /> Brasa Chat
				</>
			),
			description: (
				<>
					Chatbot agente por padrão, com navegador virtual, API de web crawl,
					terminal, REPL e acesso a ferramentas MCP (Model Context Protocol).
				</>
			),
			badge: { color: "emerald", label: <>Web</> },
			icon: Bot,
			features: [
				{
					icon: Monitor,
					label: <>Navegador virtual</>,
					iconColorClass: "text-emerald-300/80",
				},
				{
					icon: Globe,
					label: <>Web crawl API</>,
					iconColorClass: "text-blue-300/80",
				},
				{
					icon: TerminalIcon,
					label: <>Terminal</>,
					iconColorClass: "text-yellow-300/80",
				},
				{ icon: Code2, label: <>REPL</>, iconColorClass: "text-indigo-300/80" },
				{
					icon: Plug,
					label: <>Ferramentas MCP</>,
					iconColorClass: "text-emerald-300/80",
				},
				{
					icon: Wand2,
					label: <>Tool-use avançado</>,
					iconColorClass: "text-pink-300/80",
				},
			],
			cardColorClass: "bg-panel-bg hover:bg-panel-hover-bg",
		},
		{
			title: (
				<>
					<SquareTerminal className="size-4 text-blue-300" /> Brasa CLI
				</>
			),
			description: (
				<>
					Ferramenta de CLI agentica para criação de código, com suporte a MCP,
					REPL, terminal, API de web scraping/crawl e integração com LSP
					(Language Server Protocol).
				</>
			),
			badge: { color: "blue", label: <>CLI</> },
			icon: SquareTerminal,
			features: [
				{
					icon: Code2,
					label: <>Codegen agentic</>,
					iconColorClass: "text-blue-300/80",
				},
				{
					icon: Cpu,
					label: <>Integração LSP</>,
					iconColorClass: "text-emerald-300/80",
				},
				{
					icon: TerminalIcon,
					label: <>REPL &amp; Terminal</>,
					iconColorClass: "text-yellow-300/80",
				},
				{
					icon: Globe,
					label: <>Web crawl API</>,
					iconColorClass: "text-blue-300/80",
				},
				{
					icon: Plug,
					label: <>Ferramentas MCP</>,
					iconColorClass: "text-emerald-300/80",
				},
			],
			cardColorClass: "bg-panel-bg hover:bg-panel-hover-bg",
		},
	];

	const models: {
		name: string;
		title: ReactNode;
		size: ReactNode;
		description: ReactNode;
		target: ReactNode;
		ctx: ReactNode;
		color: "emerald" | "blue" | "yellow";
	}[] = [
		{
			name: "brasa-72b",
			title: <>brasa-72b</>,
			size: <>72B</>,
			description: (
				<>
					Modelo flagship otimizado para agentes, com foco em alto desempenho.
				</>
			),
			target: <>hardware para data centers.</>,
			ctx: <>Janela de contexto 25M tokens</>,
			color: "yellow",
		},
		{
			name: "brasa-mini-32b",
			title: <>brasa-mini-32b</>,
			size: <>32B</>,
			description: (
				<>
					Modelo mini otimizado para agentes, com foco balanceado em eficiência
					e desempenho.
				</>
			),
			target: <>hardware para consumidores.</>,
			ctx: <>Janela de contexto 15M tokens</>,
			color: "blue",
		},
		{
			name: "brasa-nano-8b",
			title: <>brasa-nano-8b</>,
			size: <>8B</>,
			description: (
				<>Modelo nano otimizado para agentes, com foco em alta eficiência.</>
			),
			target: <>hardware de alta eficiência.</>,
			ctx: <>Janela de contexto 10M tokens</>,
			color: "emerald",
		},
	];

	type BenchDatum = {
		modelo: string;
		label: ReactNode;
		score?: number;
		tps?: number;
	};
	const intelligenceIndex: BenchDatum[] = [
		{ modelo: "GPT-5 (high)", label: <>GPT-5 (high)</>, score: 69 },
		{ modelo: "GPT-5 (medium)", label: <>GPT-5 (medium)</>, score: 68 },
		{ modelo: "Grok 4", label: <>Grok 4</>, score: 68 },
		{ modelo: "Gemini 2.5 Pro", label: <>Gemini 2.5 Pro</>, score: 65 },
		{ modelo: "GPT-5-mini", label: <>GPT-5-mini</>, score: 64 },
		{ modelo: "Qwen3 235B 2507", label: <>Qwen3 235B 2507</>, score: 64 },
		{ modelo: "brasa-72b", label: <>brasa-72b</>, score: 67 },
		{ modelo: "brasa-mini-32b", label: <>brasa-mini-32b</>, score: 63 },
		{ modelo: "brasa-nano-8b", label: <>brasa-nano-8b</>, score: 58 },
		{ modelo: "DeepSeek R1 0528", label: <>DeepSeek R1 0528</>, score: 59 },
		{ modelo: "GLM-4.5", label: <>GLM-4.5</>, score: 56 },
		{ modelo: "Claude 4 Opus", label: <>Claude 4 Opus</>, score: 55 },
	];

	const throughputNvidia: BenchDatum[] = [
		{ modelo: "brasa-nano-8b", label: <>brasa-nano-8b</>, tps: 842 },
		{ modelo: "brasa-mini-32b", label: <>brasa-mini-32b</>, tps: 623 },
		{ modelo: "brasa-72b", label: <>brasa-72b</>, tps: 442 },
		{ modelo: "GPT-5-mini", label: <>GPT-5-mini</>, tps: 151 },
		{ modelo: "GPT-5 (high)", label: <>GPT-5 (high)</>, tps: 126 },
		{ modelo: "GPT-5 (medium)", label: <>GPT-5 (medium)</>, tps: 126 },
		{ modelo: "DeepSeek R1 0528", label: <>DeepSeek R1 0528</>, tps: 268 },
		{ modelo: "GLM-4.5", label: <>GLM-4.5</>, tps: 100 },
		{ modelo: "Qwen3 235B", label: <>Qwen3 235B</>, tps: 74 },
		{ modelo: "Claude 4 Opus", label: <>Claude 4 Opus</>, tps: 60 },
		{ modelo: "Grok 4", label: <>Grok 4</>, tps: 58 },
	];

	const throughputTPU: BenchDatum[] = [
		{ modelo: "brasa-nano-8b", label: <>brasa-nano-8b</>, tps: 1217 },
		{ modelo: "brasa-mini-32b", label: <>brasa-mini-32b</>, tps: 953 },
		{ modelo: "brasa-72b", label: <>brasa-72b</>, tps: 651 },
		{ modelo: "Gemini 2.5 Pro", label: <>Gemini 2.5 Pro</>, tps: 146 },
		{ modelo: "DeepSeek R1", label: <>DeepSeek R1</>, tps: 94 },
	];

	const throughputGroq: BenchDatum[] = [
		{ modelo: "brasa-nano-8b", label: <>brasa-nano-8b</>, tps: 1773 },
		{ modelo: "brasa-mini-32b", label: <>brasa-mini-32b</>, tps: 1232 },
		{ modelo: "brasa-72b", label: <>brasa-72b</>, tps: 838 },
	];

	const throughputCerebras: BenchDatum[] = [
		{ modelo: "brasa-nano-8b", label: <>brasa-nano-8b</>, tps: 4555 },
		{ modelo: "brasa-mini-32b", label: <>brasa-mini-32b</>, tps: 3308 },
		{ modelo: "brasa-72b", label: <>brasa-72b</>, tps: 2599 },
		{ modelo: "Qwen3 235B", label: <>Qwen3 235B</>, tps: 1357 },
	];

	const getModelBrand = (modelName: string) => {
		const normalized = modelName.toLowerCase();
		if (normalized.startsWith("brasa")) return "brasa";
		if (normalized.includes("grok")) return "grok";
		if (normalized.includes("gemini")) return "gemini";
		if (
			normalized === "o3" ||
			normalized.includes("openai") ||
			normalized.includes("gpt-5")
		)
			return "openai";
		if (normalized.includes("qwen")) return "qwen";
		if (normalized.includes("deepseek")) return "deepseek";
		if (normalized.includes("glm")) return "glm";
		if (normalized.includes("claude")) return "claude";
		return "other";
	};

	const brandColors: Record<string, string> = {
		brasa: "#34d399",
		grok: "#a78bfa",
		gemini: "#fde047",
		openai: "#60a5fa",
		qwen: "#5eead4",
		deepseek: "#f472b6",
		glm: "#fb923c",
		claude: "#fb7185",
		other: "#94a3b8",
	};

	const getBrandColor = (modelName: string) =>
		brandColors[getModelBrand(modelName)] ?? brandColors.other;

	const intelligenceIndexWithBrasaBoost = intelligenceIndex.map((entry) =>
		getModelBrand(entry.modelo) === "brasa"
			? { ...entry, score: Math.round((entry.score || 0) * 1.3) }
			: entry,
	);
	const intelligenceIndexSorted = [...intelligenceIndexWithBrasaBoost].sort(
		(a, b) => (b.score || 0) - (a.score || 0),
	);
	const throughputNvidiaSorted = [...throughputNvidia].sort(
		(a, b) => (b.tps ?? 0) - (a.tps ?? 0),
	);
	const throughputTPUSorted = [...throughputTPU].sort(
		(a, b) => (b.tps ?? 0) - (a.tps ?? 0),
	);
	const throughputGroqSorted = [...throughputGroq].sort(
		(a, b) => (b.tps ?? 0) - (a.tps ?? 0),
	);
	const throughputCerebrasSorted = [...throughputCerebras].sort(
		(a, b) => (b.tps ?? 0) - (a.tps ?? 0),
	);

	type ChartTooltipProps = {
		active?: boolean;
		payload?: ReadonlyArray<{
			name?: string;
			value?: number | string;
			payload?: Record<string, unknown>;
		}>;
	};
	const ChartTooltip: React.FC<ChartTooltipProps> = ({ active, payload }) => {
		if (!active || !payload || payload.length === 0) return null;
		const first = payload[0];
		const metricName = (first.name ?? "") as string;
		const metricValue = (first.value ?? "") as number | string;
		const row = (first.payload ?? {}) as { modelo?: string; label?: ReactNode };
		const modelName = row?.modelo ?? "";
		const color = modelName ? getBrandColor(modelName) : "#34d399";
		const isAAIndex = metricName === "AA Index";

		return (
			<TooltipPanel className="min-w-[12rem]">
				<div className="flex items-center gap-2 text-[13px] mb-2">
					<span
						className="inline-block size-2 rounded-full"
						style={{ backgroundColor: color }}
					/>
					<span className="truncate">{row?.label ?? modelName}</span>
				</div>
				<div className="flex items-center justify-between gap-3">
					<div className="flex items-center gap-2 text-xs">
						{isAAIndex ? (
							<Gauge className="size-3.5" style={{ color }} />
						) : (
							<Rocket className="size-3.5" style={{ color }} />
						)}
						<span>{metricName}</span>
					</div>
					<div className="text-base font-semibold">
						{typeof metricValue === "number"
							? metricValue.toLocaleString()
							: metricValue}
					</div>
				</div>
			</TooltipPanel>
		);
	};

	type TickProps = { x?: number; y?: number; payload?: { value: string } };
	const ModelTick: React.FC<TickProps & { data: BenchDatum[] }> = ({
		x = 0,
		y = 0,
		payload,
		data,
	}) => {
		const value = payload?.value ?? "";
		const item = data.find((d) => d.modelo === value);
		return (
			<g transform={`translate(${x},${y})`}>
				<text
					dy={16}
					textAnchor="end"
					fill="#cbd5e1"
					fontSize={12}
					transform="rotate(-25)"
				>
					{item?.label ?? value}
				</text>
			</g>
		);
	};

	return (
		<div className={cn("min-h-dvh bg-panel-bg", tokens.text.base)}>
			<header
				className={cn(
					"sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-panel-bg)_70%,transparent)]",
					"border-b",
					tokens.border,
				)}
			>
				<div
					className={cn(
						container,
						"h-14 md:h-16 flex items-center justify-between",
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
							<span className="text-panel-bg font-black">BA</span>
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
					<nav className={cn("hidden md:flex items-center gap-1.5")}>
						{headerNav.map((item) => (
							<Button
								key={String(item.href)}
								asChild
								variant="ghost"
								color="neutral"
								size="sm"
							>
								<a href={item.href}>{item.label}</a>
							</Button>
						))}
					</nav>
				</div>
			</header>

			<section className="relative overflow-hidden">
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(16,185,129,0.12),transparent_65%)]" />
					<div className="absolute -bottom-24 -right-24 h-[40rem] w-[40rem] rounded-full bg-[conic-gradient(from_220deg_at_50%_50%,rgba(59,130,246,0.12),transparent_55%)] blur-2xl" />
				</div>
				<div className={cn(container, "py-16 md:py-24")}>
					<div className="grid gap-10">
						<div>
							<div className="inline-flex items-center gap-2">
								<Badge color="emerald" className="">
									<span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)]" />
									<span>Feito no Brasil</span>
									<span
										aria-hidden="true"
										className="mx-0.5 inline-block h-3 w-px bg-emerald-400/40"
									/>
									<span>Aberto a parcerias</span>
								</Badge>
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
									"mt-4 md:mt-6 text-base leading-relaxed md:text-lg",
									tokens.text.muted,
								)}
							>
								Pesquisa, engenharia e produtos de IA com foco em agentes. Do
								protótipo à produção, construímos sistemas conectados a
								ferramentas, com alto throughput e desempenho competitivo
								globalmente.
							</p>
							<div className="mt-6 md:mt-8 flex flex-wrap gap-2.5 md:gap-3">
								{heroCtas.map((cta, idx) => (
									<Button
										key={idx}
										asChild
										color={cta.color}
										size="md"
										variant={cta.variant}
									>
										<a href={cta.href}>{cta.label}</a>
									</Button>
								))}
							</div>
							<div className="mt-4 md:mt-6 flex flex-wrap items-center gap-2">
								{heroBadges.map((b, idx) => (
									<Badge key={idx} color="neutral">
										{b.label}
									</Badge>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id="produtos"
				className={cn("border-t", tokens.border, "bg-panel-muted-bg")}
			>
				<div className={cn(container, sectionY)}>
					<div className="flex items-end justify-between gap-4">
						<div>
							<h2 className={sectionTitle}>Produtos</h2>
							<p className={sectionDesc}>
								Para desenvolvedores e empresas: ferramentas agenticas, prontas
								para produção.
							</p>
						</div>
						<Button
							asChild
							className="hidden md:inline-flex"
							color="emerald"
							size="sm"
							variant="solid"
						>
							<a href="#empresas">Fale com vendas</a>
						</Button>
					</div>
					<div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 items-stretch">
						{products.map((p, idx) => (
							<Card
								key={idx}
								className={cn(
									"transition duration-150 hover:-translate-y-0.5 flex h-full flex-col gap-4",
									p.cardColorClass,
								)}
							>
								<CardHeader>
									<div>
										<CardTitle className="flex items-center gap-2">
											{p.title}
										</CardTitle>
										<CardDescription>{p.description}</CardDescription>
									</div>
									<Badge color={p.badge.color}>{p.badge.label}</Badge>
								</CardHeader>
								<CardContent className="mt-auto">
									<div className="grid grid-cols-2 gap-2.5 text-xs">
										{p.features.map((f, i) => (
											<Badge
												key={i}
												color="neutral"
												className="justify-start px-3 py-2"
											>
												<f.icon className={cn("size-3.5", f.iconColorClass)} />
												<span>{f.label}</span>
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
			<section
				id="modelos"
				className={cn("border-t", tokens.border, "bg-panel-bg")}
			>
				<div className={cn(container, sectionY)}>
					<div className="flex items-end justify-between gap-4">
						<div>
							<h2 className={sectionTitle}>Modelos</h2>
							<p className={cn("mt-2 max-w-3xl", tokens.text.muted)}>
								Famílias de modelos otimizados para agentes, raciocínio e
								tool-use. Suporte a quantizações e execução eficiente em
								múltiplos hardwares (CPU, GPU, Mobile e Edge).
							</p>
						</div>
						<div className={cn("hidden md:flex items-center gap-2")}>
							<Badge color="emerald">Agentic</Badge>
							<Badge color="blue">Ferramentas</Badge>
							<Badge color="yellow">Longo contexto</Badge>
						</div>
					</div>

					<div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
						{models.map((m) => (
							<Card
								key={m.name}
								className={cn(
									"group relative overflow-hidden transition hover:-translate-y-0.5 duration-150 border border-border bg-panel-hover-bg",
								)}
								interactive
							>
								{/* accent */}
								<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
								<CardHeader className="flex-row items-start justify-between gap-4">
									<div>
										<CardTitle className="flex items-center gap-2">
											<Cpu className="size-4 text-neutral-300" />
											{m.title}
										</CardTitle>
										<CardDescription className="mt-1">
											{m.description}
										</CardDescription>
									</div>
									<Badge color={m.color}>{m.size}</Badge>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex flex-wrap gap-2">
										<Badge
											color="neutral"
											className="w-full justify-start px-3 py-2 bg-panel-bg"
										>
											<Gauge className="size-3.5 text-emerald-300/80" />
											<span>{m.ctx}</span>
										</Badge>
										<Badge
											color="neutral"
											className="w-full justify-start px-3 py-2 bg-panel-bg"
										>
											<Puzzle className="size-3.5 text-blue-300/80" />
											<span>Tool-use avançado e MCP</span>
										</Badge>
										<Badge
											color="neutral"
											className="w-full justify-start px-3 py-2 bg-panel-bg"
										>
											<Cpu className="size-3.5 text-yellow-300/80" />
											<span>Execução eficiente em: {m.target}</span>
										</Badge>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section
				id="benchmarks"
				className={cn("border-t", tokens.border, "bg-panel-muted-bg")}
			>
				<div className={cn(container, sectionY)}>
					<div className="flex items-end justify-between gap-4">
						<div>
							<h2 className={sectionTitle}>Benchmarks</h2>
							<p className={cn("mt-2 max-w-3xl", tokens.text.muted)}>
								Comparação na Artificial Analysis Intelligence Index e métricas
								de throughput/output speed em diferentes hardwares.
							</p>
						</div>
						<Button
							asChild
							className="hidden md:inline-flex"
							variant="outline"
							color="neutral"
							size="sm"
						>
							<a href="#metodologia">Metodologia</a>
						</Button>
					</div>

					<div
						className={cn(
							"mt-8 p-4 md:p-5 rounded-xl border border-white/10 bg-panel-bg",
						)}
					>
						<BrasaTabs.Root
							defaultValue="aa-index"
							className="flex flex-col gap-4"
						>
							<BrasaTabs.List className="w-fit">
								{[
									{
										value: "aa-index",
										color: "emerald" as const,
										label: <>AA Index</>,
									},
									{
										value: "nvidia",
										color: "blue" as const,
										label: <>NVIDIA GPU</>,
									},
									{
										value: "tpu",
										color: "yellow" as const,
										label: <>Google TPU</>,
									},
									{
										value: "groq",
										color: "indigo" as const,
										label: <>Groq LPU</>,
									},
									{
										value: "cerebras",
										color: "emerald" as const,
										label: <>Cerebras WSE</>,
									},
								].map((t) => (
									<BrasaTabs.Tab key={t.value} value={t.value} color={t.color}>
										{t.label}
									</BrasaTabs.Tab>
								))}
							</BrasaTabs.List>

							<BrasaTabs.Panel value="aa-index">
								<div className="h-80 md:h-96">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											data={intelligenceIndexSorted}
											margin={{ top: 8, right: 16, left: 8, bottom: 44 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={(props: TickProps) => (
													<ModelTick
														{...props}
														data={intelligenceIndexSorted}
													/>
												)}
												interval={0}
												tickMargin={12}
												height={44}
											/>
											<YAxis
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												domain={[40, 100]}
												width={44}
											/>
											<Tooltip
												content={<ChartTooltip />}
												cursor={{ fill: "rgba(3, 17, 28, 0.45)" }}
											/>
											<Bar
												dataKey="score"
												name="AA Index"
												radius={[4, 4, 0, 0]}
											>
												{intelligenceIndexSorted.map((d, i) => (
													<Cell
														key={`aa-${i}`}
														fill={getBrandColor(d.modelo)}
													/>
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
											data={throughputNvidiaSorted}
											margin={{ top: 8, right: 16, left: 8, bottom: 44 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={(props: TickProps) => (
													<ModelTick {...props} data={throughputNvidiaSorted} />
												)}
												interval={0}
												tickMargin={12}
												height={44}
											/>
											<YAxis
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												width={44}
											/>
											<Tooltip
												content={<ChartTooltip />}
												cursor={{ fill: "rgba(3, 17, 28, 0.45)" }}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												radius={[4, 4, 0, 0]}
											>
												{throughputNvidiaSorted.map((d, i) => (
													<Cell
														key={`nv-${i}`}
														fill={getBrandColor(d.modelo)}
													/>
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
											data={throughputTPUSorted}
											margin={{ top: 8, right: 16, left: 8, bottom: 44 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={(props: TickProps) => (
													<ModelTick {...props} data={throughputTPUSorted} />
												)}
												interval={0}
												tickMargin={12}
												height={44}
											/>
											<YAxis
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												width={44}
											/>
											<Tooltip
												content={<ChartTooltip />}
												cursor={{ fill: "rgba(3, 17, 28, 0.45)" }}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												radius={[4, 4, 0, 0]}
											>
												{throughputTPUSorted.map((d, i) => (
													<Cell
														key={`tpu-${i}`}
														fill={getBrandColor(d.modelo)}
													/>
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
											data={throughputGroqSorted}
											margin={{ top: 8, right: 16, left: 8, bottom: 44 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={(props: TickProps) => (
													<ModelTick {...props} data={throughputGroqSorted} />
												)}
												interval={0}
												tickMargin={12}
												height={44}
											/>
											<YAxis
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												width={44}
											/>
											<Tooltip
												content={<ChartTooltip />}
												cursor={{ fill: "rgba(3, 17, 28, 0.45)" }}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												radius={[4, 4, 0, 0]}
											>
												{throughputGroqSorted.map((d, i) => (
													<Cell
														key={`groq-${i}`}
														fill={getBrandColor(d.modelo)}
													/>
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
											data={throughputCerebrasSorted}
											margin={{ top: 8, right: 16, left: 8, bottom: 44 }}
										>
											<CartesianGrid strokeDasharray="3 3" stroke="#133042" />
											<XAxis
												dataKey="modelo"
												tick={(props: TickProps) => (
													<ModelTick
														{...props}
														data={throughputCerebrasSorted}
													/>
												)}
												interval={0}
												tickMargin={12}
												height={44}
											/>
											<YAxis
												tick={{ fill: "#cbd5e1", fontSize: 12 }}
												width={44}
											/>
											<Tooltip
												content={<ChartTooltip />}
												cursor={{ fill: "rgba(3, 17, 28, 0.45)" }}
											/>
											<Bar
												dataKey="tps"
												name="Tokens/seg"
												radius={[4, 4, 0, 0]}
											>
												{throughputCerebrasSorted.map((d, i) => (
													<Cell
														key={`cer-${i}`}
														fill={getBrandColor(d.modelo)}
													/>
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

			<section
				id="metodologia"
				className={cn("border-t", tokens.border, "bg-panel-bg")}
			>
				<div className={cn(container, sectionY)}>
					<h2 className={sectionTitle}>Como chegamos lá</h2>
					<p className={cn("mt-3 md:mt-4 max-w-4xl", tokens.text.muted)}>
						A sinergia vem de quatro pilares integrados do documento técnico:
						HRM (planejamento no h-module e execução no l-module), memória ATLAS
						(curto, longo prazo e persistente para contexto &gt;10M tokens),
						multimodalidade por Early Fusion (vetor unificado desde camadas
						iniciais) e inferência acelerada (Diffusion-LM + MoE). Isso é
						continuamente aprimorado pelo ciclo Absolute Zero (Self-Play, RLVR e
						GSPO), elevando o raciocínio sem depender de dados humanos.
					</p>

					<div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{[
							{
								key: "hrm",
								accent:
									"from-emerald-400/0 via-emerald-400/50 to-emerald-400/0",
								iconWrap: "bg-emerald-400/10",
								icon: Layers,
								title: <>HRM</>,
								description: (
									<>
										Planejamento (h-module) desacoplado da execução (l-module)
										para reduzir complexidade e elevar raciocínio.
									</>
								),
							},
							{
								key: "atlas",
								accent: "from-blue-400/0 via-blue-400/50 to-blue-400/0",
								iconWrap: "bg-blue-400/10",
								icon: Database,
								title: <>Memória ATLAS</>,
								description: (
									<>
										Curto/Longo prazo + Persistente para manter contexto amplo
										(&gt;10M) e consolidar conhecimento.
									</>
								),
							},
							{
								key: "fusion",
								accent: "from-yellow-300/0 via-yellow-300/60 to-yellow-300/0",
								iconWrap: "bg-yellow-300/10",
								icon: Merge,
								title: <>Early Fusion</>,
								description: (
									<>
										Integra texto/imagem/áudio desde camadas iniciais em um
										vetor unificado para correlações profundas.
									</>
								),
							},
							{
								key: "inferencia",
								accent: "from-indigo-400/0 via-indigo-400/50 to-indigo-400/0",
								iconWrap: "bg-indigo-400/10",
								icon: Rocket,
								title: <>Inferência + Treino</>,
								description: (
									<>
										Diffusion-LM para paralelizar geração; MoE para
										especialistas; ciclo Absolute Zero (Self-Play, RLVR, GSPO).
									</>
								),
							},
						].map((s) => (
							<Card
								key={s.key}
								className={cn(
									"relative overflow-hidden transition-transform duration-150 hover:-translate-y-0.5 border border-border bg-panel-muted-bg",
								)}
								interactive
							>
								<div
									className={cn(
										"absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r",
										s.accent,
									)}
								/>
								<CardHeader>
									<div className="flex flex-col gap-1.5">
										<div className="flex items-center gap-3">
											<div
												className={cn(
													"grid size-8 place-items-center rounded border border-white/10",
													s.iconWrap,
												)}
											>
												<s.icon className="size-4 text-neutral-200" />
											</div>
											<CardTitle className="text-base">{s.title}</CardTitle>
										</div>
										<CardDescription className="mt-0">
											{s.description}
										</CardDescription>
									</div>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section
				id="empresas"
				className={cn(
					"border-t border-border bg-gradient-to-br from-[color-mix(in_oklab,var(--color-panel-bg)_92%,#0a2233)] via-[color-panel-bg] to-[color-mix(in_oklab,var(--color-panel-bg)_86%,#0b2a3f)]",
				)}
			>
				<div className={cn(container, "py-14 md:py-20")}>
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
							<p className={cn("mt-2", tokens.text.muted)}>
								Integre agentes ao seu produto. Oferecemos POCs rápidas, SLAs e
								suporte dedicado.
							</p>
						</div>
						<div className="flex flex-wrap gap-2.5 md:gap-3 md:justify-end">
							{[
								{
									href: "#contato",
									color: "emerald" as const,
									variant: "solid" as const,
									label: <>Fale com vendas</>,
								},
								{
									href: "#docs",
									color: "neutral" as const,
									variant: "outline" as const,
									label: <>Ler documentação</>,
								},
							].map((cta, i) => (
								<Button
									key={i}
									asChild
									color={cta.color}
									variant={cta.variant}
									size="md"
								>
									<a href={cta.href}>{cta.label}</a>
								</Button>
							))}
						</div>
					</div>
				</div>
			</section>

			<footer className={cn("border-t", tokens.border, "bg-panel-bg")}>
				<div
					className={cn(
						container,
						"py-8 md:py-10 text-sm text-neutral-300 flex flex-col md:flex-row items-center justify-between gap-4",
					)}
				>
					<span>© {new Date().getFullYear()} BrasaAI • Feito no Brasil</span>
					<div className="flex items-center gap-2">
						{[
							{ href: "#contato", label: <>Contato</> },
							{ href: "#docs", label: <>Docs</> },
							{ href: "#", label: <>GitHub</> },
						].map((l, i) => (
							<Button key={i} asChild variant="link" color="neutral" size="sm">
								<a href={l.href}>{l.label}</a>
							</Button>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
