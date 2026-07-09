import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Info, ShieldCheck, Terminal, Layers, Zap, Cpu, Settings, Target } from "lucide-react";

const OpenSource = () => {
  return (
    <section id="open-source" className="py-20 px-4 bg-transparent relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
          Open Source Project
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Pioneering the next generation of frontend build tools and compiler performance.
        </p>

        <div className="animate-fade-in-up">
          <Card className="bg-card/40 backdrop-blur-md border-border hover:border-primary/40 transition-all duration-500 shadow-2xl relative overflow-hidden">
            {/* Soft decorative glows */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <CardHeader className="pb-4 border-b border-border/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <CardTitle className="text-3xl font-extrabold tracking-tight hover:text-primary transition-colors">
                      nuxc
                    </CardTitle>
                    <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                      Alpha: nuclie
                    </span>
                  </div>
                  <CardDescription className="text-base font-medium text-muted-foreground mt-1">
                    Modern JS/TS build tool powered by SWC + LightningCSS. A fast Webpack and Vite alternative.
                  </CardDescription>
                </div>
                <div className="flex gap-3 shrink-0">
                  <Button
                    variant="outline"
                    className="hover:bg-primary/10 hover:text-primary border-border"
                    asChild
                  >
                    <a
                      href="https://www.npmjs.com/package/nuclie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span className="font-bold text-sm">npm alpha</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2 shadow-lg shadow-primary/20"
                    asChild
                  >
                    <a
                      href="https://github.com/Avinash-1994/nuxc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub Repository</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8 pt-6">
              {/* Inspiration / Motivation */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    Why I Built Nuxc
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    In today's fast-paced web ecosystems, developers are forced to choose between the rich plugin ecosystem of Webpack and the speed of Vite. I built <strong className="text-foreground">nuxc</strong> to offer something more: a tool that blends extreme performance with enterprise-grade features out of the box. 
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Nuxc utilizes a high-performance **SWC** (Rust-based compiler) core and **LightningCSS** parser to deliver sub-100ms HMR. By integrating Module Federation, smart dependency pre-caching, and security analysis directly into the core engine, it removes the need for brittle third-party plugins.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      Future Roadmap
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      My vision is to establish nuxc as the premier tool for enterprise micro-frontends. Upcoming releases will feature enhanced Rust-based build caching, distributed build execution, and integrated automated security vulnerability scanning.
                    </p>
                  </div>
                  <div className="mt-4 text-xs font-semibold text-primary">
                    Active Development & Contributions →
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-start gap-3">
                <Info className="h-5 w-5 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="font-semibold block mb-1">Branding & Publication Note</strong>
                  The initial alpha version is currently published on npm as <code className="font-mono bg-amber-500/10 px-1.5 py-0.5 rounded text-amber-500">nuclie</code>. Due to name/branding conflicts in the npm registry, the complete, stable version is undergoing finalize branding and will be published globally under the name <strong className="font-semibold text-foreground">nuxc</strong>.
                </div>
              </div>

              {/* Tech Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <Zap className="h-5 w-5 text-primary mb-3" />
                  <h5 className="font-semibold text-foreground text-sm mb-1">Sub-100ms HMR</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">Fast compiler updates driven by a customized Hot Module Replacement websocket layer.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <Layers className="h-5 w-5 text-primary mb-3" />
                  <h5 className="font-semibold text-foreground text-sm mb-1">Module Federation</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">Native, zero-config configuration for micro-frontends and dynamic imports in dev and production.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <ShieldCheck className="h-5 w-5 text-primary mb-3" />
                  <h5 className="font-semibold text-foreground text-sm mb-1">Security Pipeline</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">Built-in asset security linting and dependency scanning directly inside the bundler.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <Settings className="h-5 w-5 text-primary mb-3" />
                  <h5 className="font-semibold text-foreground text-sm mb-1">Smart Cache</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">Automated build caching that only compiles modified dependency subgraphs.</p>
                </div>
              </div>

              {/* Framework & Libraries Support */}
              <div className="border-t border-border/50 pt-6">
                <h4 className="text-base font-bold text-foreground mb-4">
                  Supported Ecosystems & Adapters (19+ Frameworks)
                </h4>
                <p className="text-xs text-muted-foreground mb-4">
                  Nuxc supports compiling and serving almost all popular frontend libraries, frameworks, and meta-frameworks with optimized out-of-the-box configurations:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Angular", "Vue", "Svelte", "SolidJS", "Preact", "Next.js", "Nuxt", "Astro", "Remix", "Qwik", "SvelteKit", "Web Components"].map((fw) => (
                    <span 
                      key={fw}
                      className="px-3 py-1 rounded-md text-xs bg-muted border border-border/80 text-foreground/80 hover:text-foreground hover:border-primary/30 transition-colors"
                    >
                      {fw}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-md text-xs bg-primary/10 border border-primary/20 text-primary font-medium">
                    +6 more meta-frameworks
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
