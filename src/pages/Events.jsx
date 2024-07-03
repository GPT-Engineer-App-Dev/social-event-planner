import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Events = () => {
  const [search, setSearch] = useState("");

  const events = [
    { name: "Event 1", date: "01 Jan 2024", description: "This is a brief description of Event 1." },
    { name: "Event 2", date: "15 Feb 2024", description: "This is a brief description of Event 2." },
    { name: "Event 3", date: "20 Mar 2024", description: "This is a brief description of Event 3." },
  ];

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase()) ||
    event.date.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl mb-4">Events</h1>
      <Input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
              <CardDescription>{event.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;