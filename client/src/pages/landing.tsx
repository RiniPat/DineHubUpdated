import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, UtensilsCrossed, Smartphone, Sparkles, QrCode, ChefHat, Flame, Star, Eye, Pencil, BarChart3, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const demoMenuItems = [
  { id: 1, name: "Truffle Hummus", description: "Creamy chickpea hummus drizzled with truffle oil, served with warm pita.", price: "38.00", category: "Appetizer", imageUrl: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=400&h=300&fit=crop", isBestseller: true },
  { id: 2, name: "Grilled Halloumi Salad", description: "Crispy halloumi over mixed greens with pomegranate and za'atar.", price: "45.00", category: "Appetizer", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop", isChefsPick: true },
  { id: 3, name: "Seafood Risotto", description: "Arborio rice with prawns, calamari, and saffron broth.", price: "95.00", category: "Main", imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop", isBestseller: true },
  { id: 4, name: "Grilled Lamb Chops", description: "NZ lamb chops with rosemary jus and roasted vegetables.", price: "120.00", category: "Main", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", isChefsPick: true },
  { id: 5, name: "Chicken Shawarma Plate", description: "Marinated chicken with garlic sauce, pickles and tabouleh.", price: "65.00", category: "Main", imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop", isTodaysSpecial: true },
  { id: 6, name: "Kunafa Cheesecake", description: "Crispy kunafa meets creamy New York cheesecake.", price: "42.00", category: "Dessert", imageUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop", isBestseller: true },
  { id: 7, name: "Fresh Mint Lemonade", description: "House-made lemonade with mint and a hint of rose water.", price: "22.00", category: "Drink", imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop" },
  { id: 8, name: "Chocolate Lava Cake", description: "Warm chocolate fondant with vanilla ice cream.", price: "48.00", category: "Dessert", imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
];

function DemoMenuPreview() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Appetizer", "Main", "Dessert", "Drink"];
  const filtered = activeCategory === "All" ? demoMenuItems : demoMenuItems.filter(i => i.category === activeCategory);

  return (
    <div className="glass-panel rounded-3xl overflow-hidden max-w-md mx-auto relative group">
      {/* Decorative gradient orb */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-50 group-hover:bg-primary/30 transition-all duration-500" />

      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-amber-600 p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10">
          <p className="text-amber-100 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 flex items-center gap-1.5">
            <Star className="w-3 h-3" /> The Golden Fork
          </p>
          <h3 className="font-display text-2xl font-bold tracking-tight">Signature Menu</h3>
          <p className="text-white/80 text-xs mt-1.5 font-medium">Downtown Dubai</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 p-4 overflow-x-auto smooth-scroll bg-gray-50/50">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${activeCategory === cat
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
              : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="px-4 pb-4 space-y-3 max-h-[420px] overflow-y-auto smooth-scroll">
        {filtered.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            key={item.id}
            className="flex gap-3 p-2.5 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100 group/item"
          >
            <div className="relative shrink-0 overflow-hidden rounded-xl h-16 w-16 shadow-sm">
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
            </div>
            <div className="flex-1 min-w-0 py-0.5">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h4 className="font-bold text-sm text-gray-900 group-hover/item:text-primary transition-colors">{item.name}</h4>
                {(item as any).isBestseller && <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-orange-100/80 text-orange-700 border border-orange-200/50 rounded-full text-[9px] font-bold"><Flame className="w-2.5 h-2.5" />Bestseller</span>}
                {(item as any).isChefsPick && <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-violet-100/80 text-violet-700 border border-violet-200/50 rounded-full text-[9px] font-bold"><ChefHat className="w-2.5 h-2.5" />Chef's Pick</span>}
                {(item as any).isTodaysSpecial && <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-emerald-100/80 text-emerald-700 border border-emerald-200/50 rounded-full text-[9px] font-bold"><Star className="w-2.5 h-2.5" />Special</span>}
              </div>
              <p className="text-gray-500 text-[11px] leading-relaxed mt-1 line-clamp-1">{item.description}</p>
              <span className="font-bold text-xs text-primary mt-1.5 block">AED {item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Landing() {
  <div className="min-h-screen bg-white relative overflow-hidden">
    {/* Decorative background blur */}
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full filter blur-[100px] pointer-events-none" />
    <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] bg-secondary/10 rounded-full filter blur-[120px] pointer-events-none delay-1000" />

    {/* Navigation */}
    <nav className="container mx-auto px-6 h-24 flex items-center justify-between relative z-10">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="bg-gradient-to-br from-primary to-amber-600 p-2.5 rounded-xl text-white shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:-translate-y-0.5 transition-all duration-300">
          <UtensilsCrossed className="w-6 h-6" />
        </div>
        <span className="font-display font-bold text-3xl tracking-tight text-gray-900">
          DineHub
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Link href="/login">
          <Button variant="ghost" className="font-semibold px-4 sm:px-6 hover:bg-gray-50/80 rounded-full">Log in</Button>
        </Link>
        <Link href="/register">
          <Button className="font-semibold rounded-full px-6 sm:px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 hover:bg-primary/90 transition-all duration-300">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="container mx-auto px-6 py-16 md:py-32 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 text-primary text-sm font-semibold px-5 py-2.5 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 animate-pulse" /> AI-Powered Digital Menus
          </motion.div>
          <h1 className="font-display text-6xl md:text-[5rem] font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
            Your Menu, <br />
            <span className="text-gradient inline-block">Reimagined.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
            Create stunning digital menus in seconds. Generate QR codes, update prices instantly, and let AI build your menu from scratch.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/register">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Create Free Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-gray-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300 w-full sm:w-auto">
                Try Live Demo
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative lg:ml-auto w-full max-w-[500px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent rounded-full filter blur-3xl opacity-40 transform translate-y-10 animate-pulse-soft" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <DemoMenuPreview />
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Discover Dubai Banner */}
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 glass-card border-white/10 bg-white/5 p-8 rounded-3xl"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center text-3xl shrink-0 shadow-lg shadow-primary/20">
              🇦🇪
            </div>
            <div className="text-white">
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Discover Dubai's Top 10 Restaurants</h3>
              <p className="text-gray-300 text-sm md:text-base mt-2 max-w-lg">Browse real menus from Zuma, Nobu, Pierchic, Tresind Studio & more</p>
            </div>
          </div>
          <Link href="/discover">
            <Button size="lg" className="h-14 px-8 text-base rounded-full bg-white text-gray-900 hover:bg-primary hover:text-white shadow-xl hover:shadow-primary/30 whitespace-nowrap transition-all duration-300">
              Explore Menus <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-24 bg-gray-50/50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
          >
            Simple Process
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">How It Works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Go from zero to a live digital menu in under 5 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Sign Up", desc: "Create your free account in seconds.", icon: CheckCircle2 },
            { step: "2", title: "Add Details", desc: "Enter your restaurant name, cuisine type, and info.", icon: UtensilsCrossed },
            { step: "3", title: "Build Menu", desc: "Add items manually or let AI generate your entire menu.", icon: Sparkles },
            { step: "4", title: "Go Live", desc: "Print QR codes for each table. Customers scan and order.", icon: QrCode },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 text-primary flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-primary/5 group-hover:-translate-y-2 group-hover:shadow-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {item.icon ? <item.icon className="w-8 h-8" /> : item.step}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Everything you need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Focus on cooking. We'll handle the digital experience.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Sparkles,
              title: "AI Menu Generation",
              desc: "Tell us your cuisine type. AI writes descriptions, sets prices in AED, and even adds food photos — all in one click."
            },
            {
              icon: QrCode,
              title: "Per-Table QR Codes",
              desc: "Generate unique QR codes for each table. Customers scan with their phone and see your full menu instantly."
            },
            {
              icon: Smartphone,
              title: "Mobile First Design",
              desc: "Beautiful, themed menus that look stunning on every device. No app download required for customers."
            },
            {
              icon: Pencil,
              title: "Live Menu Editing",
              desc: "Update prices, toggle items on/off, mark bestsellers — changes go live to customers in real-time."
            },
            {
              icon: Eye,
              title: "Availability Control",
              desc: "Ran out of an ingredient? Toggle any item to 'Hidden' with one tap. Bring it back when you're ready."
            },
            {
              icon: BarChart3,
              title: "Restaurant Dashboard",
              desc: "Manage all your menus, items, and QR codes from one simple dashboard. No tech skills needed."
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className="bg-gradient-to-br from-primary/10 to-amber-500/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-24 md:py-32 overflow-hidden mx-4 md:mx-auto max-w-7xl mb-12 rounded-[3rem]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-amber-700" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/10 rounded-full filter blur-3xl opacity-50" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Ready to go digital?</h2>
          <p className="text-white/90 text-xl font-light mb-10 leading-relaxed">
            Join restaurants across the UAE already using DineHub to serve their customers better.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/register">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-primary hover:bg-gray-50 shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto">
                Try Live Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-950 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="bg-gradient-to-br from-primary to-amber-600 p-2.5 rounded-xl">
            <UtensilsCrossed className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-white">DineHub</span>
        </div>
        <p className="text-gray-500 text-sm font-light">Digital menus for modern restaurants.</p>
      </div>
    </footer>

    {/* Footer */}
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-white/10 p-2 rounded-lg">
            <UtensilsCrossed className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-white">DineHub</span>
        </div>
        <p className="text-gray-500 text-sm">Digital menus for modern restaurants.</p>
      </div>
    </footer>
  </div>
  );
}
