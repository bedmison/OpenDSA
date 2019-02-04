.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Bob Edmison

.. slideconf::
   :autoslides: False

============
Quality Code
============

.. slide:: Quality Code

  * The quality of your code can impact both your ability to identify and correct defects in your code.


.. slide:: Example 1

   * A real bug from some code for an OpenDSA exercise.
     You don't need to know much about the language to recognize
     the bug (once you spot it)::

      <li><var><code>O(n^2)</code></var></li>
      <li><var><code>O(n \log n)</code></var></li>
      <li><var><code>O(\log n)</code><var></li>
      <li><var><code>O(1)</code></var></li>


.. slide:: Example 1 (cont)

   * A real bug from some code for an OpenDSA exercise.
     You don't need to know much about the language to recognize
     the bug (once you spot it)::

      <li><var><code>O(n^2)</code></var></li>
      <li><var><code>O(n \log n)</code></var></li>
      <li><var><code>O(\log n)</code><var></li>
      <li><var><code>O(1)</code></var></li>

   * When refactored for readability, the bug pops out immediately::

      <li><var><code>O(n^2)     </code></var></li>
      <li><var><code>O(n \log n)</code></var></li>
      <li><var><code>O(\log n)  </code><var></li>
      <li><var><code>O(1)       </code></var></li>

.. note::
   We often rely on tools to manage this, but in some cases, the tools don't help. In this case, the missing closing </var> tag might not be identified
   in a tool that only highlights the tags, but not missing matching tags.

.. slide:: Example 2

   * A real sample of code::

      var nodeOne = graphTwo.addNode("a ", {left: 0, top: 0});
      var nodeTwo = graphTwo.addNode("c", {left: 100, top: 0});
      var nodeThree = graphTwo.addNode("e", {left: 50, top: 50});
      var nodeFour = graphTwo.addNode("b", {left: 0,  top: 100});
      var nodeFive =graphTwo.addNode("d ", {left: 100, top: 100});


.. slide:: Example 2 (cont)

   * A real sample of code::

      var nodeOne = graphTwo.addNode("a ", {left: 0, top: 0});
      var nodeTwo = graphTwo.addNode("c", {left: 100, top: 0});
      var nodeThree = graphTwo.addNode("e", {left: 50, top: 50});
      var nodeFour = graphTwo.addNode("b", {left: 0,  top: 100});
      var nodeFive =graphTwo.addNode("d ", {left: 100, top: 100});

   * Refactored for readability::

      var nodea = graph2.addNode("a", {left:   0, top:   0});
      var nodeb = graph2.addNode("b", {left:   0, top: 100});
      var nodec = graph2.addNode("c", {left: 100, top:   0});
      var noded = graph2.addNode("d", {left: 100, top: 100});
      var nodee = graph2.addNode("e", {left:  50, top:  50});

.. note::
   This is where coding standards can help.

.. slide:: Over-constrained Code (1)

   * Consider the situation where we have two points. We want to know which
     quadrant the second point (b) is in w.r.t. the first point (a)::

       if ((b.x < a.x) && (b.y < a.y))
         doNW();
       else if ((b.x < a.x) && (b.y >= a.y))
         doSW();
       else if ((b.x >= a.x) && (b.y < a.y))
         doNE();
       else if ((b.x >= a.x) && (b.y >= a.y))
         doSE();

   * This has the virtue of being quite logical and clear. However, it has
     some problems.


.. slide:: Over-constrained Code (2)

   * It is horribly inefficient, compared to alternatives.
      -  But our real concern has to do with testing and code coverage.
   * Fact: No series of tests will cover all branches in this code.
      - Q: Why?
      - A: Consider every possible branch and see what can get triggered. Consider that there have to be at least 8+ branches, and only 4 possible inputs!!
   * Try to hit every branch by brute force, one at a time...


.. slide:: Over-constrained Code (3)

   * Q: If we want complete code coverage when there are only four
     logically distinct inputs, then we had better do what?
   * A: Come up with code that has only four branches!


.. slide:: Over-constrained Code (4)

   * Refactored code::

       if (b.x < a.x)
         if (b.y < a.y)
           doNW();
         else
           doSW();
       else
         if (b.y < a.y)
           doNE();
         else
           doSE();

   * Not only can you test every branch, but this is a lot more efficient!
     Every branch requires 2 tests!
