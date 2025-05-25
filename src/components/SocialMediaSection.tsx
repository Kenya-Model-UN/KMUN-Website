"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Instagram, Linkedin, Twitter, Video, ExternalLink, Heart, MessageCircle, Share, Eye } from "lucide-react"
import { useState, useEffect } from "react"

const SocialMediaSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const socialPlatforms = [
    {
      platform: "Instagram",
      icon: Instagram,
      followers: "12.5K",
      handle: "@kenyamun",
      url: "https://www.instagram.com/kenyamun/?hl=en",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      recent: "Latest: Behind the scenes from our leadership training workshop",
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      followers: "8.3K",
      handle: "Kenya Model United Nations",
      url: "https://ke.linkedin.com/company/kenya-model-united-nations",
      color: "bg-blue-600",
      recent: "Latest: Article on 'The Future of Diplomatic Education in Africa'",
    },
    {
      platform: "Twitter/X",
      icon: Twitter,
      followers: "15.2K",
      handle: "@modelunkenya",
      url: "https://x.com/modelunkenya?lang=en",
      color: "bg-black",
      recent: "Latest: Live updates from the East African Youth Summit",
    },
    {
      platform: "TikTok",
      icon: Video,
      followers: "25.8K",
      handle: "@kenyamun",
      url: "https://www.tiktok.com/@kenyamun",
      color: "bg-black",
      recent: "Latest: 'Day in the life of a KMUN delegate' series",
    },
    {
      platform: "Facebook",
      icon: () => (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      followers: "18.7K",
      handle: "Kenya Model UN",
      url: "https://www.facebook.com/kenyamodelun/",
      color: "bg-blue-600",
      recent: "Latest: Photo album from KMUN Conference 2024",
    },
  ]

  const livePosts = [
    {
      id: 1,
      platform: "Instagram",
      platformColor: "from-purple-500 to-pink-500",
      content:
        "🌍 Incredible energy at today's committee sessions! Our delegates are tackling climate change with innovative solutions. #KMUN2025 #ClimateAction #YouthLeadership",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      likes: 234,
      comments: 18,
      shares: 12,
      time: "2 hours ago",
      verified: true,
    },
    {
      id: 2,
      platform: "LinkedIn",
      platformColor: "from-blue-600 to-blue-700",
      content:
        "🤝 Proud to announce our partnership with the UN Environment Programme for our upcoming Youth Climate Summit. Together, we're empowering the next generation of environmental leaders. Read more about our collaborative initiatives...",
      likes: 156,
      comments: 23,
      shares: 45,
      time: "4 hours ago",
      verified: true,
    },
    {
      id: 3,
      platform: "TikTok",
      platformColor: "from-black to-gray-800",
      content:
        "POV: You're representing Kenya at your first MUN conference 🇰🇪 Watch till the end for delegate tips! #MUNLife #DiplomacyTips #KenyaMUN",
      views: "12.3K",
      likes: 892,
      comments: 67,
      time: "6 hours ago",
      verified: true,
    },
    {
      id: 4,
      platform: "Twitter/X",
      platformColor: "from-black to-gray-900",
      content:
        "🚨 BREAKING: Registration for KMUN 2025 is now LIVE! Early bird pricing available until February 15th. Don't miss your chance to be part of East Africa's premier MUN conference. Link in bio 🔗 #KMUN2025 #ModelUN #Diplomacy",
      likes: 89,
      retweets: 34,
      comments: 12,
      time: "8 hours ago",
      verified: true,
    },
    {
      id: 5,
      platform: "Facebook",
      platformColor: "from-blue-600 to-blue-700",
      content:
        "📸 Throwback to our amazing KMUN Conference 2024! Swipe through to see highlights from our three-day diplomatic simulation. Thank you to all 500+ delegates who made it unforgettable! Planning for 2025 is already underway...",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      likes: 312,
      comments: 45,
      shares: 28,
      time: "1 day ago",
      verified: true,
    },
    {
      id: 6,
      platform: "Instagram",
      platformColor: "from-purple-500 to-pink-500",
      content:
        "✨ Meet our Secretary-General Sarah Mwangi! Leading KMUN with vision, passion, and dedication to diplomatic excellence. Swipe to see her journey from delegate to leader 👑 #Leadership #WomenInDiplomacy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c820?w=400&h=300&fit=crop",
      likes: 445,
      comments: 32,
      shares: 19,
      time: "1 day ago",
      verified: true,
    },
  ]

  const formatTimeAgo = (timeString: string) => {
    return timeString
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            📱 Social Media Hub
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect With Us{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Everywhere
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest activities, events, and insights across all social platforms
          </p>
        </div>

        {/* Social Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {socialPlatforms.map((social) => (
            <Card
              key={social.platform}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${social.color} text-white`}>
                    <social.icon className="h-6 w-6" />
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="group-hover:bg-gray-100"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <h3 className="font-semibold text-lg mb-1">{social.platform}</h3>
                <p className="text-sm text-gray-600 mb-2">{social.handle}</p>
                <div className="text-2xl font-bold text-blue-600 mb-3">{social.followers}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{social.recent}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Social Media Feed */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Live Social Feed</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live updates</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {livePosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${post.platformColor} rounded-full flex items-center justify-center text-white text-sm font-semibold`}
                      >
                        {post.platform[0]}
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="font-medium text-sm">{post.platform}</span>
                          {post.verified && (
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">{formatTimeAgo(post.time)}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {post.time}
                    </Badge>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Post content"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}

                  {/* Post Content */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{post.content}</p>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                      {post.shares && (
                        <div className="flex items-center space-x-1">
                          <Share className="w-4 h-4" />
                          <span>{post.shares}</span>
                        </div>
                      )}
                      {post.views && (
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      )}
                      {post.retweets && (
                        <div className="flex items-center space-x-1">
                          <Share className="w-4 h-4" />
                          <span>{post.retweets}</span>
                        </div>
                      )}
                    </div>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                      View Post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Follow us on social media for daily updates, behind-the-scenes content, and exclusive insights from the
            world of diplomacy and international relations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialPlatforms.slice(0, 3).map((platform) => (
              <Button
                key={platform.platform}
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open(platform.url, "_blank")}
              >
                <platform.icon className="w-4 h-4 mr-2" />
                Follow on {platform.platform}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialMediaSection
