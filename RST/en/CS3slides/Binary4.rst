.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Cliff Shaffer

.. slideconf::
   :autoslides: False

===================
Binary Trees Part 4
===================

.. slide:: Balanced Binary Trees

   * Binary search trees provide :math:`O(log N)` search times provided that the nodes are distributed in a
      reasonably “balanced” manner.

   * Unfortunately, that is not always the case and performing a sequence of deletions and insertions can often
     exacerbate the problem.

.. slide:: Balanced Binary Trees

   * When a BST becomes badly unbalanced, the search behavior can degenerate to that of a sorted linked list, :math:`O(N)`.

   * There are a number of strategies for dealing with this problem; most involve adding some sort of
     restructuring to the insert/delete algorithms.

   * This can be effective only if the restructuring reduces the average depth of a node from the root of the BST,
     and if the cost of the restructuring is, on average, :math:`O(log N)`.

.. slide:: AVL Trees

   * A binary search tree in which the heights of the left and right subtrees of the root differ by at most 1,
     and in which the left and right subtrees are themselves AVL trees.

   * Adelson-Velskii and Landis, 1962

   * Each AVL tree node has an associated balance factor indicating the relative heights of its subtrees
     (left-higher, equal, right-higher).  Normally, this adds one data element to each tree node and an
     enumerated type is used.

   * How effective is this?  The height of an AVL tree with :math:`N` nodes never exceeds
     :math:`1.44 log N` and is typically much closer to log N.

.. slide:: Example

   .. figure:: Images/AVLExample.png
      :width: 500
      :align: center
      :alt: AVL Tree Example

.. slide:: Unbalanced from Insertion

   * Consider inserting the value 45 into this AVL tree:

   .. figure:: Images/AVLWithValues.png
      :width: 450
      :align: center
      :alt: AVL Tree Example with values


.. slide:: Unbalanced from Insertion (2)

   * The result would be unbalanced at the node containing 25:

   .. figure:: Images/AVLUnbalBranch.png
      :width: 400
      :align: center
      :alt: AVL Tree Example with values

   * The unbalance is repaired by applying one of two types of “rotation” to the unbalanced subtree.


.. slide:: Rebalancing via Subtree Restructuring

    * The subtree rooted at 25 is right-higher:

   .. figure:: Images/AVLRebalLeft.png
      :width: 400
      :align: left
      :alt: AVL Tree Example with values


   .. figure:: Images/AVLRebalLeftResult.png
      :width: 400
      :align: right
      :alt: AVL Tree Example with values


    * The transformation is relatively simple, and results in a subtree that has equal balance.



