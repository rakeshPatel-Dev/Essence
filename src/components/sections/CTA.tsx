
const CTA = () => {
  return (
    <div>
      <section className="bg-[#2c6e72]/5 rounded-2xl p-12 lg:p-20 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="font-display text-4xl font-bold">
            Never miss a secret ingredient.
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Join 10,000+ home chefs and receive hand-picked seasonal recipes
            every Saturday morning.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            className="flex-1 rounded-xl border-none bg-white dark:bg-[#2C2F33] px-6 py-4 focus:ring-2 focus:ring-[#2c6e72]"
            placeholder="Your email address"
            type="email"
          />
          <button className="bg-[#2c6e72] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2c6e72]/90 transition-all">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default CTA
