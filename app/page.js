import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Wassup G Dogg</h2>
      <Button variant="ghost">Subscribe</Button>

      <UserButton />
    </div>
  );
}
