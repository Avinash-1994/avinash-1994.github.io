import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Info, AlertTriangle, ShieldCheck, Terminal, Layers, Zap } from "lucide-react";

const OpenSource = () => {
  return (
    <section id="open-source" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Open Source Project
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          My contribution to developer tooling and performance bundlers
        </p>

        <div className="animate-fade-in-up">
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 shadow-xl relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-3xl font-bold hover:text-primary transition-colors">
                      nuclie
                    </CardTitle>
                    <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                      Alpha Release
                    </span>
                  </div>
                  <CardDescription className="text-base font-medium text-primary/80 mt-1">
                    Next-Generation ESM-Powered Build Tool & Bundler
                  </CardDescription>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="hover:bg-primary/10 hover:text-primary border-primary/20"
                    asChild
                  >
                    <a
                      href="https://www.npmjs.com/package/nuclie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span className="font-bold text-sm">npm</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                    asChild
                  >
                    <a
                      href="https://github.com/Avinash-1994/nuxc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span>Full Version (nuxc)</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  An extremely fast, ESM-first build tool and development server designed to replace complex tooling setups with zero-configuration defaults. It leverages an esbuild-powered pipeline, implements custom Hot Module Replacement (HMR) over WebSockets, and natively supports Module Federation for Micro-Frontends.
                </p>
              </div>

              {/* Status & Publication Notice */}
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 flex items-start gap-3">
                <Info className="h-5 w-5 shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed">
                  <span className="font-semibold block mb-1">Project Status & Naming Notice</span>
                  The alpha version has been published on npm under the name <code className="font-mono bg-yellow-500/20 px-1 rounded">nuclie</code>. 
                  Due to name/branding confusion, the full, stable version has not been published yet. 
                  Once the final name is resolved and finalized, the complete version will be published under the name <strong className="font-semibold">nuxc</strong> on GitHub and NPM.
                </div>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  Key Architecture & Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/40 border border-border/50 hover:bg-muted/60 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-primary font-medium">
                      <Zap className="h-4 w-4" />
                      <h5>Blazing Fast Dev Server</h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Implements on-the-fly transforms using esbuild & Babel, serving native ESM files with an intelligent pre-bundled dependencies façade.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/40 border border-border/50 hover:bg-muted/60 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-primary font-medium">
                      <Layers className="h-4 w-4" />
                      <h5>Module Federation</h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Built-in native support for serving and loading remote modules dynamically, standardizing micro-frontend architectures in dev/prod.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/40 border border-border/50 hover:bg-muted/60 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-primary font-medium">
                      <ShieldCheck className="h-4 w-4" />
                      <h5>Custom HMR Hooks</h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Uses localized WebSocket connections to deliver sub-50ms Hot Module Replacement updates without breaking application state.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/40 border border-border/50 hover:bg-muted/60 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-primary font-medium">
                      <Terminal className="h-4 w-4" />
                      <h5>Optimized Bundling</h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A robust build-time toolchain utilizing tree-shaking, code-splitting, and CSS injection to produce ultra-lightweight production assets.
                    </p>
                  </div>
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
