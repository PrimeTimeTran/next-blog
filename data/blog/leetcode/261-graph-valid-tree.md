---
draft: true
date: '2022-11-12'
title: 'data-structures-algorithms'
tags:
  [
    'Leetcode',
    'Algorithms',
    'Data structures',
    'javascript',
    'typescript',
    'dart',
    'java',
    'python',
    'Ruby',
    'go',
  ]
summary: 'Solving programming problems in multiple languages to master syntax, data structures, and algorithms.'
---

## 261. Graph Valid Tree

### Solution

You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

## Declare Hashmap

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="ts" className="tablinks">typescript</button>
    <button id="dart" className="tablinks">dart</button>
    <button id="java" className="tablinks">java</button>
    <button id="python" className="tablinks">python</button>
    <button id="ruby" className="tablinks">ruby</button>
    <button id="go" className="tablinks">go</button>
  </div>

  <div id="js" className="tabcontent">
    ```js {} showLineNumbers
    //

    var validTree = function(n, edges) {
    var g = {}
    for (var i = 0; i < n; i++) {
        g[i] = []
    }
    for (const [a,b] of edges) {
        g[a].push(b)
        g[b].push(a)
    }
    var seen = new Set()
    function dfs(v, prev) {
        if (seen.has(v)) return false
        seen.add(v)
        for (const nei of g[v]) {
            if (nei == prev) continue
            if (!dfs(nei, v)) return false
        }
        return true
    }

    return dfs(0,-1) && seen.size == n
    };
    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    //

    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    //

    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    //

    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    #

    ```

  </div>

  <div id="ruby" className="tabcontent">
    ```ruby {} showLineNumbers
    #

    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    //

    ```

  </div>
</div>

### Questions? Concerns?

Please comment a better solution if you have one.
