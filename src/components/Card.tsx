import {
  Card as _Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Card = () => {
  return (
    <_Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>Card Content</CardContent>
      <CardFooter>Card Footer</CardFooter>
    </_Card>
  );
};

export default Card;
