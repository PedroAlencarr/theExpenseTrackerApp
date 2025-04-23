import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import DUMMY_EXPENSES from "../utils/dummyExpenses";

function AllExpenses() {
  return <ExpensesOutput expensesPeriod="Total" expenses={DUMMY_EXPENSES} />;
}
export default AllExpenses;
