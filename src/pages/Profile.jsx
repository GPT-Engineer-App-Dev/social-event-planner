import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://via.placeholder.com/150",
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedUser = {
      name: formData.get("name"),
      email: formData.get("email"),
      profilePicture: user.profilePicture,
    };
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={user.profilePicture} alt="Profile" className="mb-4 rounded-full w-32 h-32 object-cover" />
          {isEditing ? (
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <Input id="name" name="name" defaultValue={user.name} required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input id="email" name="email" type="email" defaultValue={user.email} required />
              </div>
              <Button type="submit">Save</Button>
            </form>
          ) : (
            <div>
              <p className="mb-2"><strong>Name:</strong> {user.name}</p>
              <p className="mb-4"><strong>Email:</strong> {user.email}</p>
              <Button onClick={handleEdit}>Edit</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;