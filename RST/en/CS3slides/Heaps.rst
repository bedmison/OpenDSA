.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Cliff Shaffer

.. slideconf::
   :autoslides: False

=====
Heaps
=====

Heaps
-----

.. slide:: Problem

   * We want a data structure that stores records as they come (insert), but on request,
     releases the record with the greatest value (``removemax``).

   * For example: Scheduling jobs in a multi-tasking operating system

   * Can be managed with *Priority Queues*

.. slide:: Possible Solutions

   * Insert appends to an array or a linked list (:math:`O(1)`) and then ``removemax`` determines the maximum
     by scanning the list ( :math:`O(n)` )

   * A linked list is used and is in decreasing order; insert places an element in its correct
     position ( :math:`O(n)` ) and ``removemax`` simply removes the head of the list( :math:`O(1)` ).

   * Use a *heap* – both ``insert`` and ``removemax`` are :math:`O(log n)` operations


.. slide:: Heap

   * Complete binary tree with the heap property

   * Two variants:

      * **Min-heap**: Each node stores value that is less than or equal to child values.

      * **Max-heap**: Each node stores value that is greater than or equal to child values.

   * Values are *partially-ordered*

   * Heap representation: Normally the array-based complete binary tree representation


.. slide:: Caution!!

   * Be sure not to confuse the logical representation of a heap with its physical implementation

   * The two are not synonymous because the logical view of the heap is actually a tree structure,
     while the typical physical implementation uses an array.


.. slide:: Heap ``insert``

   .. inlineav:: heapinsertCON ss
      :long_name: Heap insert Slideshow
      :links: 
      :scripts: DataStructures/binaryheap.js AV/Binary/heapinsertCON.js
      :output: show


.. slide:: Building a Heap

   .. inlineav:: heapbuildCON ss
      :long_name: Heapbuild Slideshow
      :links: 
      :scripts: DataStructures/binaryheap.js AV/Binary/heapbuildCON.js
      :output: show


.. slide:: Building a Heap Proof

   .. inlineav:: heapbuildProofCON ss
      :long_name: Heap build analysis proof Slideshow
      :links: AV/Binary/heapbuildProofCON.css
      :scripts: DataStructures/binaryheap.js AV/Binary/heapbuildProofCON.js
      :output: show


.. slide:: Delete the maximum value

   .. inlineav:: heapmaxCON ss
      :long_name: Remove Max Slideshow
      :links: 
      :scripts: DataStructures/binaryheap.js AV/Binary/heapmaxCON.js
      :output: show


.. slide:: Heap Sort

   * Using a max-heap

   * A list can be sorted by first building it into a heap, and then iteratively deleting the root node
     from the heap until the heap is empty.

   * If the deleted roots are stored in reverse order in an array they will be sorted in ascending order

   .. codeinclude:: Sorting/HeapSort
      :tag: Heapsort

.. slide:: Heap Action Costs

   * Building Heap: At worst, there is one swap for each two comparisons, the maximum number of swaps is :math:`N – ⎡log N⎤`.
     Therefore, building a heap of :math:`N`  nodes is :math:`Θ(N)`

   * Deleting Root:  :math:`Θ(log N)`

   * Heap Sort: :math:`Θ(N log N)`

