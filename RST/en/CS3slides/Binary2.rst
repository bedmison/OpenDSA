.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Cliff Shaffer

.. slideconf::
   :autoslides: False

===================
Binary Trees Part 2
===================

Binary Trees Part 2
-------------------

.. slide:: Full and Complete Binary Trees

   Full binary tree: Each node is either a leaf or internal node with
   exactly two non-empty children.

   Complete binary tree: If the height of the tree is :math:`d`,
   then all leaves except possibly level :math:`d` are completely
   full.
   The bottom level has all nodes to the left side.

   .. inlineav:: FullCompCON dgm
      :links: AV/Binary/FullCompCON.css
      :scripts: AV/Binary/FullCompCON.js
      :align: center


.. slide:: Full Binary Tree Theorem (1)

   **Theorem:** The number of leaves in a non-empty full binary tree
   is one more than the number of internal nodes.

   **Proof** (by Mathematical Induction):

   **Base case:** A full binary tree with 1 internal node must have
   two leaf nodes.

   **Induction Hypothesis:** Assume any full binary tree **T** containing
   :math:`n-1` internal nodes has :math:`n` leaves.


.. slide:: Full Binary Tree Theorem (2)

   **Induction Step:** Given tree **T** with :math:`n` internal nodes,
   pick internal node :math:`I` with two leaf children.
   Remove :math:`I`'s children, call resulting tree **T'**.

   By induction hypothesis, **T'** is a full binary tree with :math:`n`
   leaves.

   Restore :math:`I`'s two children.
   The number of internal nodes has now gone up by 1 to reach
   :math:`n`.
   The number of leaves has also gone up by 1.


.. slide:: Full Binary Tree Corollary

   **Theorem:** The number of null pointers in a non-empty tree is one
   more than the number of nodes in the tree.

   **Proof:** Replace all null pointers with a pointer to an empty leaf
   node.  This is a full binary tree.


.. slide:: Binary Search Trees

   * Definition: A Binary Search Tree (BST) s a binary tree that is either empty or in which the data element of each node has a key, and:

        1. All keys in the left subtree (if there is one) are less than (or equal to) the key in the root node.

        2. All keys in the right subtree (if there is one) are greater than the key in the root node.

        3. The left and right subtrees of the root are binary search trees.


.. slide:: Binary Search Trees

   .. odsafig:: Images/BSTShape2.png
      :width: 500
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: Two Binary Search Trees

   * (a) Insert order 37, 24, 42, 7, 2, 40, 42, 32, 120

   * (b) Insert order 120, 42, 42, 7, 2, 32, 37, 24, 40


.. slide:: BST Searching

   * Searching resembles the binary search algorithm on a sorted array

   * A BST offers the advantage of purely dynamic storage,
     no wasted array cells and no shifting of the array tail on insertion and deletion.


.. slide:: BST ``findhelp``

   * What happens when we want to add a value of 30 to this BST?

   .. inlineav:: BSTsearchCON ss
      :links: AV/Binary/BSTCON.css
      :scripts: AV/Binary/BSTsearchCON.js
      :output: show

.. slide:: BST Insertion

   * In a BST, insertion is always at the leaf level.  Traverse the BST,
      comparing the new value to existing ones, until you find the right spot,
      then add a new leaf node holding that value.

.. slide:: BST ``inserthelp``

   * What happens when we want to add a value of 30 to this BST?

   .. inlineav:: BSTinsertCON ss
      :links: AV/Binary/BSTCON.css
      :scripts: AV/Binary/BSTinsertCON.js
      :output: show


.. slide:: .

   .

.. slide:: BST Deletion

   * Removing a node from a BST is a bit trickier than inserting a node,
     but it is not complicated if all of the possible cases are considered individually.

   * If the key value is a leaf, removal is easy: Set the relevant node pointer in parent node to NULL.

   * Removing an internal node which has only one subtree is also trivial, just set the
     relevant child pointer in the parent node to target the root of the subtree.

.. slide:: BST Deletion (2)

   .. odsafig:: Images/BSTDel.png
      :width: 500
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: Deleting nodes from a BST

   * Let us consider how we can remove the largest key value in a BST.

.. slide:: BST ``deletemax``

   .. inlineav:: BSTdeletemaxCON ss
      :links: AV/Binary/BSTCON.css
      :scripts: AV/Binary/BSTdeletemaxCON.js
      :output: show

.. slide:: BST Deletion (3)

    * Removing internal nodes that has two subtrees is more complex.

    * One simple approach, though expensive, is to set the deleted node's parent
      to point to one of node's subtrees, and then reinsert the remaining subtree's nodes
      one at a time.

        - **EXPENSIVE**

.. slide:: BST Deletion (4)

    * A better alternative is to find a value in one of the subtrees that can replace the key value
      in the deleted node.

        - But which one?

        - Either:

            - The least key value 'greater' than the one being removed

            or

            - The greatest key value 'less than' (or equal to) the one being removed

.. slide:: BST ``removehelp``

   .. inlineav:: BSTremoveCON ss
      :links: AV/Binary/BSTCON.css
      :scripts: AV/Binary/BSTremoveCON.js
      :output: show

.. slide:: .

   .

.. slide:: BST as a Dictionary (1)

   .. codeinclude:: Binary/BST
      :tag: BSTa

.. slide:: BST as a Dictionary (2)

   .. codeinclude:: Binary/BST
      :tag: BSTb


.. slide:: BST Analysis

   Find: :math:`O(d)`

   Insert: :math:`O(d)`

   Delete: :math:`O(d)`

   :math:`d =` depth of the tree

   :math:`d` is :math:`O(\log n)` if the tree is balanced.

   What is the worst case cost? When?
