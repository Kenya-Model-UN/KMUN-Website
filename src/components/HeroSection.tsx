import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Calendar, Award, Play } from "lucide-react"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-8 h-8 bg-yellow-400 rotate-45 animate-bounce delay-300"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-40 left-1/3 w-4 h-12 bg-yellow-300 rotate-12 animate-pulse"></div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main heading with modern typography */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-6">
            <span className="text-blue-300 text-sm font-medium">🇰🇪 Since 2003</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-yellow-300 bg-clip-text text-transparent">
              Kenya
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-blue-300 to-white bg-clip-text text-transparent">
              MUN
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 mx-auto mb-6 rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
          Empowering the next generation of global leaders through
          <span className="text-yellow-300 font-semibold"> diplomacy</span>,
          <span className="text-blue-300 font-semibold"> debate</span>, and
          <span className="text-white font-semibold"> international understanding</span>
        </p>

        {/* Modern CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10 flex items-center">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group relative border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 rounded-full px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Our Story
          </Button>
        </div>

        {/* Enhanced stats with modern design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-yellow-400/20 rounded-full">
                  <Users className="h-8 w-8 text-yellow-300" />
                </div>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-blue-200 font-medium">Active Members</div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-400/20 rounded-full">
                  <Calendar className="h-8 w-8 text-blue-300" />
                </div>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-br from-white to-yellow-200 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <div className="text-blue-200 font-medium">Annual Events</div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-400/20 rounded-full">
                  <Award className="h-8 w-8 text-green-300" />
                </div>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-br from-white to-green-200 bg-clip-text text-transparent mb-2">
                21
              </div>
              <div className="text-blue-200 font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
