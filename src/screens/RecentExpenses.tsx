import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import DUMMY_EXPENSES from "../utils/dummyExpenses";

function RecentExpenses() {
  return (
    <ExpensesOutput expensesPeriod="Last 7 Days" expenses={DUMMY_EXPENSES} />
  );
}
export default RecentExpenses;
