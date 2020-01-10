.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Cliff Shaffer

.. slideconf::
   :autoslides: False

==============
Sorting Part 2
==============

Sorting Part 2
--------------
.. slide:: Shellsort

   * Invented by D.L. Shell in 1959

   * Also called the *Diminishing Increment Sort*

   * No real-life analogue to shellsort like Insertion Sort or Selection Sort.

   * Exploits the :math:`\theta(n)` runtime of a *nearly sorted* list

   * Performance: :math:`\theta(n\sqrt{n})` = :math:`\theta(n^{1.5})`

.. slide:: Shellsort

   .. avembed:: AV/Sorting/shellsortAV.html ss


.. slide:: Shellsort

   .. codeinclude:: Sorting/Shellsort
      :tag: Shellsort

.. slide:: Mergesort

   * Takes a *divide and conquer approach* to sorting

        - Break the list to be sorted into pieces, process the pieces, and then put them back together somehow

   * A simple way to do this would be to split the list in half, sort the halves, and then merge the sorted halves together.

   * Simple in theory, not so straight forward in practice to implement

.. slide:: Mergesort

   Here is a pseudocode sketch of Mergesort::

    List mergesort(List inlist) {
      if (inlist.length() <= 1) return inlist;;
      List L1 = half of the items from inlist;
      List L2 = other half of the items from inlist;
      return merge(mergesort(L1), mergesort(L2));
    }



.. slide:: Mergesort

   * The hardest step to understand about Mergesort is the merge function.

   * The merge function starts by examining the first record of each sublist and picks the smaller value as the smallest record overall.

   * This smaller value is removed from its sublist and placed into the output list.

   * Merging continues in this way, comparing the front records of the sublists and continually appending the smaller to the output list until no more input records remain.

.. slide:: Mergesort

   Here is pseudocode for merge on lists::

    List merge(List L1, List L2) {
      List answer = new List();
      while (L1 != NULL || L2 != NULL) {
        if (L1 == NULL) { // Done L1
          answer.append(L2);
          L2 = NULL;
        }
        else if (L2 == NULL) { // Done L2
          answer.append(L1);
          L1 = NULL;
        }
        else if (L1.value() <= L2.value()) {
          answer.append(L1.value());
          L1 = L1.next();
        }
        else {
          answer.append(L2.value());
          L2 = L2.next();
        }
      }
      return answer;
    }


.. slide:: Mergesort

   .. avembed:: AV/Sorting/mergesortAV.html ss

.. slide:: .

   .


.. slide:: Mergesort cost

   * Mergesort cost: :math:`\theta(n \log n)`

      - There are :math:`log n + 1` levels, each requiring :math:`\theta(n)` work.

   * Mergsort is also good for sorting linked lists.

   * Mergesort requires twice the space.


.. slide:: Quicksort

   * Also takes a *divide and conquer approach* to sorting, but uses a different approach to the division

   * Select a value called the *pivot*, and rearrange the array such that all of the values less than or equal to the pivot are moved to the leftmost positions in the array, and those greater than or equal are placed afterward.

   * The *pivot*  is placed in the last position in the array.

   * Finding the pivot: Turns out best performance is often finding the value at the middle indice of the array

.. slide:: Quicksort

   .. codeinclude:: Sorting/Quicksort
      :tag: Quicksort

   .. codeinclude:: Sorting/Quicksort
      :tag: findpivot


.. slide:: Quicksort Partition

   .. inlineav:: quicksortCON ss
      :long_name: Quicksort Partition Slideshow
      :links: AV/Sorting/quicksortCON.css
      :scripts: AV/Sorting/quicksortCODE.js AV/Sorting/quicksortCON.js
      :output: show


.. slide:: Quicksort Partition Cost

   .. inlineav:: QuickSortPartitionAnalysisCON ss
      :long_name: Quicksort Partition Analysis Slideshow
      :links: AV/Development/QuickSortPartitionAnalysisCON.css
      :scripts: AV/Development/QuickSortPartitionAnalysisCON.js
      :output: show


.. slide:: Quicksort Summary

   .. avembed:: AV/Sorting/quicksortAV.html ss


.. slide:: Quicksort Worst Case

   .. inlineav:: QuickSortWorstCaseCON ss
      :long_name: Quicksort Worst Case Analysis Slideshow
      :links: AV/Development/QuickSortWorstCaseCON.css
      :scripts: AV/Development/QuickSortWorstCaseCON.js
      :output: show


.. slide:: .

   .

.. slide:: Quicksort Best Case

   .. inlineav:: QuickSortBestCaseCON ss
      :long_name: Quicksort Best Case Analysis Slideshow
      :links: AV/Development/QuickSortBestCaseCON.css
      :scripts: AV/Development/QuickSortBestCaseCON.js
      :output: show


.. slide:: .

   .

.. slide:: Quicksort Average Case

   .. inlineav:: QuickSortAverageCaseCON ss
      :long_name: Quicksort Average Case Analysis Slideshow
      :links: AV/Development/QuickSortAverageCaseCON.css
      :scripts: AV/Development/QuickSortAverageCaseCON.js
      :output: show

.. slide:: Quicksort Sort Analysis:

   * Best Case: :math:`\theta(n \log n)`

   * Worst Case: :math:`\theta(n^2)`

   * Average Case: :math:`\theta(n \log n)`


.. slide:: Optimizations for Quicksort

   * Find a better Pivot
   * Inline instead of function calls
   * Eliminate recursion
   * Better algorithm for small sublists: Insertion sort
      * Best: Don't sort small lists at all, do a final Insertion Sort to
        clean up.


.. slide:: Heapsort

   .. inlineav:: heapsortCON ss
      :long_name: Heapsort Slideshow
      :links: 
      :scripts: DataStructures/binaryheap.js AV/Sorting/heapsortCON.js
      :output: show


.. slide:: Heapsort Analysis

   .. inlineav:: HeapSortAnalysisCON ss
      :long_name: Heapsort Analysis Slideshow
      :links: AV/Development/HeapSortAnalysisCON.css
      :scripts: DataStructures/binaryheap.js AV/Development/HeapSortAnalysisCON.js
      :output: show


.. slide:: Binsort

   .. codeinclude:: Sorting/Binsort
      :tag: simplebinsort

   .. inlineav:: binsortS1CON ss
      :long_name: Binsort Slideshow 1
      :links: 
      :scripts: AV/Sorting/binsortS1CON.js
      :output: show


.. slide:: Radix Sort: Linked List

   .. avembed:: AV/Sorting/radixLinkAV.html ss


.. slide:: .

   .


.. slide:: Radix Sort: Array

   .. avembed:: AV/Sorting/radixArrayAV.html ss


.. slide:: Radix Sort Implementation

   .. codeinclude:: Sorting/Radixsort
      :tag: Radixsort


.. slide:: .

   .

.. slide:: Radix Sort Analysis

   .. inlineav:: RadixSortAnalysisCON ss
      :long_name: Radix Sort Analysis Slideshow
      :links: AV/Development/RadixSortAnalysisCON.css
      :scripts: AV/Development/RadixSortAnalysisCON.js
      :output: show


.. slide:: Empirical Analysis

   .. math::

      \begin{array}{l|rrrrrrrr}
      \hline
      \textbf{Sort} & \textbf{10}& \textbf{100} & \textbf{1K}&
      \textbf{10K} & \textbf{100K}& \textbf{1M}& \textbf{Up} & \textbf{Down}\\
      \hline
      \textrm{Insertion} & .00023 & .007 & 0.66 &  64.98 &  7381.0 &  674420 & 0.04 & 129.05\\
      \textrm{Bubble}    & .00035 & .020 & 2.25 & 277.94 & 27691.0 & 2820680 &  70.64 & 108.69\\
      \textrm{Selection} & .00039 & .012 & 0.69 &  72.47 &  7356.0 &  780000 &  69.76 &  69.58\\
      \textrm{Shell}     & .00034 & .008 & 0.14 &   1.99 &    30.2 &     554 &   0.44 &   0.79\\
      \textrm{Shell/O}   & .00034 & .008 & 0.12 &   1.91 &    29.0 &     530 &   0.36 &   0.64\\
      \textrm{Merge}     & .00050 & .010 & 0.12 &   1.61 &    19.3 &     219 &   0.83 &   0.79\\
      \textrm{Merge/O}   & .00024 & .007 & 0.10 &   1.31 &    17.2 &     197 &   0.47 &   0.66\\
      \textrm{Quick}     & .00048 & .008 & 0.11 &   1.37 &    15.7 &     162 &   0.37 &   0.40\\
      \textrm{Quick/O}   & .00031 & .006 & 0.09 &   1.14 &    13.6 &     143 &   0.32 &   0.36\\
      \textrm{Heap}      & .00050 & .011 & 0.16 &   2.08 &    26.7 &     391 &   1.57 &   1.56\\
      \textrm{Heap/O}    & .00033 & .007 & 0.11 &   1.61 &    20.8 &     334 &   1.01 &   1.04\\
      \textrm{Radix/4}   & .00838 & .081 & 0.79 &   7.99 &    79.9 &     808 &   7.97 &   7.97\\
      \textrm{Radix/8}   & .00799 & .044 & 0.40 &   3.99 &    40.0 &     404 &   4.00 &   3.99\\
      \hline
      \end{array}


.. slide:: Sorting Lower Bound (1)

   * We would like to know a lower bound for the problem of sorting

   * Sorting is :math:`O(n \log n)` (average, worst cases) because we know of
     algorithms with this upper bound.

   * Sorting I/O takes :math:`\Omega(n)` time. You have to look at all records
     to tell if the list is sorted.

   * We will now prove :math:`\Omega(n log n)` lower bound for sorting.


.. slide:: Sorting Lower Bound (2)

   .. avembed:: AV/Development/SortingLowerBound.html ss
