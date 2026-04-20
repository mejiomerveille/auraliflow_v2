import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Package, ShoppingCart, Users, Wallet, FileText,
  Menu, LogOut, ChevronRight, TrendingUp, AlertTriangle, Boxes, Coins
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const sidebarLinks = [
  { label: "Vue d'ensemble", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Produits", icon: Package, href: "/dashboard/products" },
  { label: "Ventes", icon: ShoppingCart, href: "/dashboard/sales" },
  { label: "Clients", icon: Users, href: "/dashboard/customers" },
  { label: "Trésorerie", icon: Wallet, href: "/dashboard/cashflow" },
  { label: "Rapports", icon: FileText, href: "/dashboard/reports" },
];

const kpis = [
  { label: "Chiffre d'affaires", value: "1 250 000 F", change: "+22 %", positive: true, icon: Coins },
  { label: "Ventes du mois", value: "1 342", change: "+15 %", positive: true, icon: TrendingUp },
  { label: "Stock total", value: "856", change: "Articles", positive: true, icon: Boxes },
  { label: "Ruptures de stock", value: "08", change: "À réapprovisionner", positive: false, icon: AlertTriangle },
];

const recentSales = [
  { id: 1, customer: "Aminata Koné", product: "Coque iPhone 14", amount: "12 500 F", date: "Aujourd'hui", status: "Livré" },
  { id: 2, customer: "Moussa Diallo", product: "Câble USB-C x3", amount: "8 900 F", date: "Aujourd'hui", status: "En attente" },
  { id: 3, customer: "Fatou Sow", product: "Écouteurs sans fil", amount: "34 000 F", date: "Hier", status: "Livré" },
  { id: 4, customer: "Ibrahim Touré", product: "Protection écran x5", amount: "15 000 F", date: "Hier", status: "Livré" },
  { id: 5, customer: "Aïcha Bah", product: "Support téléphone", amount: "7 500 F", date: "Il y a 2 jours", status: "Livré" },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-rose/40">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-bordeaux-dark text-primary-foreground flex flex-col transition-transform duration-300 lg:relative lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center gap-2.5 p-6 border-b border-primary-foreground/10">
          <div className="h-9 w-9 rounded-xl bg-primary-foreground flex items-center justify-center">
            <span className="font-heading font-black text-primary text-lg">A</span>
          </div>
          <span className="font-heading text-lg font-bold">Auraliflow</span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${active ? "bg-primary-foreground/15 text-primary-foreground" : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/5"}`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-primary-foreground/10">
          <Link to="/">
            <button className="flex items-center gap-3 px-4 py-2.5 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors w-full">
              <LogOut className="h-4 w-4" /> Déconnexion
            </button>
          </Link>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-card flex items-center px-6 gap-4 sticky top-0 z-30">
          <button className="lg:hidden text-foreground" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <div>
            <h1 className="font-heading font-semibold text-foreground">Tableau de bord</h1>
            <p className="text-xs text-muted-foreground">Boutique Merv2 · Douala</p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="h-9 w-9 rounded-full gradient-bordeaux flex items-center justify-center text-xs font-bold text-primary-foreground">
              AK
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpis.map((kpi, i) => (
              <ScrollReveal key={kpi.label} delay={i * 0.08}>
                <div className="rounded-2xl bg-card p-5 border border-border hover:shadow-card transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="h-10 w-10 rounded-xl bg-rose flex items-center justify-center">
                      <kpi.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${kpi.positive ? "bg-green-50 text-green-700" : "bg-rose text-primary"}`}>
                      {kpi.change}
                    </span>
                  </div>
                  <p className="text-2xl font-heading font-bold text-foreground">{kpi.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{kpi.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <ScrollReveal className="lg:col-span-2">
              <div className="rounded-2xl bg-card border border-border p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-heading font-semibold text-foreground">Ventes récentes</h2>
                  <Button variant="ghost" size="sm" className="text-primary text-xs">
                    Tout voir <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
                <div className="space-y-1">
                  {recentSales.map((sale) => (
                    <div key={sale.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-rose flex items-center justify-center text-xs font-bold text-primary">
                          {sale.customer.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{sale.customer}</p>
                          <p className="text-xs text-muted-foreground">{sale.product}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-foreground">{sale.amount}</p>
                        <p className="text-xs text-muted-foreground">{sale.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-2xl gradient-bordeaux text-primary-foreground p-6 h-full">
                <h2 className="font-heading font-semibold mb-2">Plan PRO</h2>
                <p className="text-xs text-primary-foreground/70 mb-6">Expire le 14/05/2026</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-primary-foreground/70">Boutiques</span><span className="font-semibold">3 / illimité</span></div>
                  <div className="flex justify-between"><span className="text-primary-foreground/70">Produits</span><span className="font-semibold">142</span></div>
                  <div className="flex justify-between"><span className="text-primary-foreground/70">Utilisateurs</span><span className="font-semibold">5</span></div>
                </div>
                <Button className="w-full mt-6 bg-primary-foreground text-primary hover:bg-rose">
                  Gérer mon abonnement
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
