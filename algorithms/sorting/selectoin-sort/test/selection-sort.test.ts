import { selectionSort } from "../selection-sort.ts";
import { generateSortTestForImpl } from "../../../../common-test-cases/selection-sort.ts";

generateSortTestForImpl("Selection Sort", selectionSort);
