import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Interested in collaboration? Feel free to reach out!
        </p>
        
        <Card className="bg-card/50 backdrop-blur-sm border-border animate-scale-in">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="mailto:pavinash469@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-primary rounded-lg group-hover:animate-glow">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">pavinash469@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+919301201064"
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-primary rounded-lg group-hover:animate-glow">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">+91 9301201064</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Bilaspur, Chhattisgarh</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/p-avinash-kumar-0437481b3/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/Avinash-1994" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
