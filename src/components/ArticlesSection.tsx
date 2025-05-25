import type React from "react"
import { Clock, User } from "lucide-react"

interface Article {
  title: string
  author: string
  readTime: string
  imageUrl: string
  content: string
}

const ArticlesSection: React.FC = () => {
  const articles: Article[] = [
    {
      title: "The Future of Diplomacy in a Digital Age",
      author: "Dr. Anya Sharma",
      readTime: "5 min",
      imageUrl:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      content: "Explore how technology is reshaping international relations and diplomatic practices.",
    },
    {
      title: "Climate Change and Global Security",
      author: "James O’Connell",
      readTime: "7 min",
      imageUrl:
        "https://images.unsplash.com/photo-1542601906990-b4d3fbfa8f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
      content: "An analysis of the security implications of climate change and its impact on global stability.",
    },
    {
      title: "The Rise of Artificial Intelligence in Foreign Policy",
      author: "Emily Carter",
      readTime: "6 min",
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47a04ca0ecd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      content: "Examining the role of AI in shaping foreign policy decisions and international cooperation.",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
            📚 Knowledge Hub
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Insights</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, analysis, and perspectives on diplomacy, international relations, and global affairs from our
            community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden">
              <img
                src={article.imageUrl || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <span>👁️ 1.2k views</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-700 leading-relaxed">{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticlesSection
