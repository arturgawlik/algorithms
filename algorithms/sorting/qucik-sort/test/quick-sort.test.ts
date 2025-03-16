import { generateSortTestForImpl } from "../../../../common-test-cases/selection-sort.ts";
import { quickSort } from "../quick-sort.ts";

generateSortTestForImpl("Selection Sort", quickSort);
