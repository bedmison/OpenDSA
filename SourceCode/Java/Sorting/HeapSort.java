/* *** ODSATag: Heapsort *** */
void HeapSort(int* List, int Size) {
    HeapT<int> toSort(List, Size);
    toSort.BuildHeap();
    intIdx = Size - 1;
    while ( !toSort.isEmpty() ) {
        List[Idx] = toSort.RemoveRoot();
        Idx--;
    }
}
/* *** ODSAendTag: Heapsort *** */
