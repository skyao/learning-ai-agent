#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""check-links.py 的回归用例。跑法：python3 scripts/test_check_links.py

只覆盖锚点匹配，因为这里出过一次静默回归：Hugo 压缩后属性值不带引号，
而检查器只认 id="x"，于是把有效锚点报成失效。回归不会有任何报错，
只会让检查器说谎——所以用例要钉死两侧：该命中的必须命中，不该命中的
（更长的 id、别的属性名）必须不命中。
"""

import importlib.util
import os
import unittest

_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "check-links.py")
_spec = importlib.util.spec_from_file_location("check_links", _PATH)
check_links = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(check_links)


class TestHasAnchor(unittest.TestCase):
    def test_double_quoted(self):
        self.assertTrue(check_links.has_anchor('<h2 id="里程碑类型">', "里程碑类型"))

    def test_single_quoted(self):
        self.assertTrue(check_links.has_anchor("<h2 id='里程碑类型'>", "里程碑类型"))

    def test_unquoted(self):
        # Hugo 压缩输出省略不必要引号，这是实际发布出来的形式
        self.assertTrue(check_links.has_anchor("<h2 id=里程碑类型>", "里程碑类型"))

    def test_unquoted_before_self_closing(self):
        self.assertTrue(check_links.has_anchor("<hr id=里程碑类型/>", "里程碑类型"))

    def test_other_attribute_name(self):
        self.assertFalse(check_links.has_anchor("<div data-id=里程碑类型>", "里程碑类型"))

    def test_unquoted_prefix_is_not_a_match(self):
        self.assertFalse(check_links.has_anchor("<h2 id=能力分层>", "能力"))

    def test_quoted_prefix_is_not_a_match(self):
        self.assertFalse(check_links.has_anchor('<h2 id="能力分层">', "能力"))

    def test_regex_metacharacters_are_literal(self):
        self.assertFalse(check_links.has_anchor("<h2 id=axb>", "a.b"))

    def test_missing(self):
        self.assertFalse(check_links.has_anchor("<p>无关内容</p>", "里程碑类型"))


if __name__ == "__main__":
    unittest.main(verbosity=2)
