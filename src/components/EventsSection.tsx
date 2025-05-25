import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "KMUN Annual Conference 2025",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "KICC, Nairobi",
      description:
        "Our flagship three-day conference featuring 12 committees and 500+ delegates from across East Africa.",
      attendees: 500,
      status: "Registration Open",
      featured: true,
    },
    {
      id: 2,
      title: "Diplomatic Training Workshop",
      date: "February 8, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "University of Nairobi",
      description: "Intensive workshop on negotiation techniques and diplomatic protocol for new members.",
      attendees: 50,
      status: "Few Spots Left",
      featured: false,
    },
    {
      id: 3,
      title: "Youth Climate Summit",
      date: "April 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "UNEP Headquarters",
      description: "Special session focusing on climate action and sustainable development goals.",
      attendees: 200,
      status: "Coming Soon",
      featured: true,
    },
    {
      id: 4,
      title: "Model Security Council Simulation",
      date: "May 10, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Strathmore University",
      description: "Interactive simulation of UN Security Council proceedings on current global issues.",
      attendees: 75,
      status: "Planning",
      featured: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registration Open":
        return "bg-green-500"
      case "Few Spots Left":
        return "bg-yellow-500"
      case "Coming Soon":
        return "bg-blue-500"
      case "Planning":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for engaging conferences, workshops, and simulations that shape the next generation of diplomatic
            leaders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              className={`group hover:shadow-xl transition-all duration-300 ${
                event.featured ? "ring-2 ring-blue-500/20 bg-gradient-to-br from-blue-50 to-white" : ""
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </CardTitle>
                    {event.featured && <Badge className="mb-2 bg-blue-600">Featured Event</Badge>}
                  </div>
                  <Badge variant="outline" className={`${getStatusColor(event.status)} text-white border-none`}>
                    {event.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{event.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <div className="pt-4 flex space-x-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={event.status === "Planning"}>
                    {event.status === "Planning" ? "Stay Tuned" : "Register Now"}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
