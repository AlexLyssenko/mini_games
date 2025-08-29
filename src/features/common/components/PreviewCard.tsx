import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

export const PreviewCard = ({ to, title, icon, desc }: {
  to: string;
  title: string;
  icon: React.ReactNode;
  desc: string
}) => {


  return (

    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">{icon} <Link to={to}>{title}</Link></CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">{desc}</CardContent>
    </Card>

  );

};