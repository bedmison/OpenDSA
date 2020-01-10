.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Cliff Shaffer

.. slideconf::
   :autoslides: False

==============
Sorting Part 1
==============

Sorting Part 1
--------------

.. slide:: Sorting

   * Each record contains a field called the key.
      * Place records in linear order by key comparison.

   * Measures of cost:
      * Number of comparisons between keys
      * Number of swap operations (when records are large)

.. slide:: Insertion Sort

   What would you do if you have a stack of phone bills from the past
   two years and you want to order by date?
   A fairly natural way to handle this is to look at the first two
   bills and put them in order.
   Then take the third bill and put it into the right position with
   respect to the first two, and so on.


.. slide:: Insertion Sort - Initial Step
 
   Consider this start to the process.

   .. inlineav:: insertionsortCON ss
      :long_name: Insertion Sort Slideshow
      :links: 
      :scripts: AV/Sorting/insertionsortCON.js
      :output: show
            

.. slide:: Insertion Sort Analysis: Worst Case

   .. inlineav:: InsertionSortWorstCaseCON ss
      :long_name: Insertion Sort Worst Case Slideshow
      :links: AV/Sorting/InsertionSortWorstCaseCON.css
      :scripts: AV/Sorting/InsertionSortWorstCaseCON.js
      :output: show


.. slide:: Insertion Sort Analysis: Best Case

   .. inlineav:: InsertionSortBestCaseCON ss
      :long_name: Insertion Sort Best Case Slideshow
      :links: AV/Sorting/InsertionSortBestCaseCON.css
      :scripts: AV/Sorting/InsertionSortBestCaseCON.js
      :output: show


.. slide:: Insertion Sort Analysis: Average Case

   .. inlineav:: InsertionSortAverageCaseCON ss
      :long_name: Insertion Sort Average Case Slideshow
      :links: AV/Sorting/InsertionSortAverageCaseCON.css
      :scripts: AV/Sorting/InsertionSortAverageCaseCON.js
      :output: show

.. slide:: Insertion Sort Analysis:

   * Best Case: :math:`\theta(n)`

   * Worst Case: :math:`\theta(n^2)`

   * Average Case: :math:`\theta(n^2)`

   * While the best case is significantly faster than the average and worst cases,
     the average and worst cases are usually more reliable indicators of the "typical" running time.

.. slide:: Bubble Sort

   * Bubble sort is one of the first sorting algorithms taught to beginning programmers, which is too bad, because as sorting techniques go, it's pretty terrible.

   * Why is it taught first?: Dead simple to implement.

   * For each pass through the array, the largest value "bubbles up" to the last position in the array.

.. slide:: Bubble Sort

   .. inlineav:: bubblesortS1CON ss
      :long_name: Bubble Sort Slideshow 1
      :links: 
      :scripts: AV/Sorting/bubblesortS1CON.js
      :output: show

   .. inlineav:: bubblesortS2CON ss
      :long_name: Bubble Sort Slideshow 2
      :links: 
      :scripts: AV/Sorting/bubblesortS2CON.js
      :output: show


.. slide:: Bubble Sort Analysis

   * Best/Worst/Average Case: :math:`\theta(n^2)`

   .. inlineav:: BubbleSortAnalysisCON ss
      :long_name: Bubble Sort Analysis Slideshow
      :links: AV/Sorting/BubbleSortAnalysisCON.css
      :scripts: AV/Sorting/BubbleSortAnalysisCON.js
      :output: show

.. slide:: Selection Sort

   Consider again sorting a stack of phone bills...

   Another intuitive approach might be to look through the pile until you find the bill for January,
   and pull that out. Then look through the remaining pile until you find the bill for February,
   and add that behind January. Proceed through the ever-shrinking pile of bills to
   select the next one in order until you are done.

   This is a Selection Sort

.. slide:: Selection Sort

   .. inlineav:: selectionsortS1CON ss
      :long_name: Selection Sort Slideshow 1
      :links: 
      :scripts: AV/Sorting/selectionsortS1CON.js
      :output: show

   .. inlineav:: selectionsortS2CON ss
      :long_name: Selection Sort Slideshow 2
      :links: 
      :scripts: AV/Sorting/selectionsortS2CON.js
      :output: show


.. slide:: Analysis

   .. inlineav:: SelectionSortAnalysisCON ss
      :long_name: Selection Sort Analysis Slideshow
      :links: AV/Sorting/SelectionSortAnalysisCON.css
      :scripts: AV/Sorting/SelectionSortAnalysisCON.js
      :output: show


.. slide:: Summary


   +--------------------+--------------------+---------------------+--------------------+
   |  Comparisons       | Insertion          | Bubble              | Selection          |
   +====================+====================+=====================+====================+
   |  Best Case         | :math:`\theta(n)`  | :math:`\theta(n^2)` | :math:`\theta(n^2)`|
   +--------------------+--------------------+---------------------+--------------------+
   |  Average Case      | :math:`\theta(n^2)`| :math:`\theta(n^2)` | :math:`\theta(n^2)`|
   +--------------------+--------------------+---------------------+--------------------+
   |  Worst Case        | :math:`\theta(n^2)`| :math:`\theta(n^2)` | :math:`\theta(n^2)`|
   +--------------------+--------------------+---------------------+--------------------+

   +--------------------+--------------------+---------------------+--------------------+
   |  Swaps             | Insertion          | Bubble              | Selection          |
   +====================+====================+=====================+====================+
   |  Best Case         | :math:`0`          | :math:`0`           | :math:`\theta(n)`  |
   +--------------------+--------------------+---------------------+--------------------+
   |  Average Case      | :math:`\theta(n^2)`| :math:`\theta(n^2)` | :math:`\theta(n)`  |
   +--------------------+--------------------+---------------------+--------------------+
   |  Worst Case        | :math:`\theta(n^2)`| :math:`\theta(n^2)` | :math:`\theta(n)`  |
   +--------------------+--------------------+---------------------+--------------------+


.. slide:: Code Tuning (1)

   * General strategy: Test to avoid work
      * Balance test cost, success probability, work saved

   * "Optimizations" for quadratic sorts:
      * Insertion Sort shift vs swaps: Works
      * Selection Sort viewed as an optimization of Bubble Sort: Works
      * Selection Sort avoid self-swaps: Does not work
      * Bubble Sort "i" vs "1": Works
      * Bubble Sort avoid/count comparisions: Does not work
      * Bubble Sort O(1) lower bound claim: Bogus

.. slide:: Exchange Sorting

   * All of the sorts so far rely on exchanges of adjacent records: Inversions

   .. inlineav:: ExchangeSortCON ss
      :long_name: Exchange Sort Analysis Slideshow
      :links: AV/Sorting/ExchangeSortCON.css
      :scripts: AV/Sorting/ExchangeSortCON.js
      :output: show
