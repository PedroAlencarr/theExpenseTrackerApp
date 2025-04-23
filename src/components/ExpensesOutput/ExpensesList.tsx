import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

type ExpensesListProps = {
  expenses: { id: string; description: string; amount: number; date: Date }[];
};

function RenderExpenseItem({
  item,
}: {
  item: { id: string; description: string; amount: number; date: Date };
}) {
  return <ExpenseItem {...item} />;
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={RenderExpenseItem}
    />
  );
}

export default ExpensesList;
