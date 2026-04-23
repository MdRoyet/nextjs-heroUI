// import { CircleDollar } from "@gravity-ui/icons";
import { Card } from "@heroui/react";

const TasksCard = ({ task }) => {
  const { title, description, statas, priority } = task;
  return (
    <Card variant="primary" className="w-[400px] border-2 border-primary">
      {/* <CircleDollar
        aria-label="Dollar sign icon"
        className="text-primary size-6"
        role="img"
      /> */}
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
        <Card.Description>{statas}</Card.Description>
        <Card.Description>{priority}</Card.Description>
      </Card.Header>
    </Card>
  );
};

export default TasksCard;
