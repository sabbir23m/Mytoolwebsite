/**
 * WebUtils Blog & Tutorials Engine
 * Integrates real category-specific tutorials with 1-click tool launch actions,
 * plus optional background sync with Google Blogger feeds.
 */
(function (global) {
  'use strict';

  function getBloggerUrl() {
    return localStorage.getItem('webutils_blogger_url') || '';
  }

  function renderPostCard(post) {
    var card = document.createElement('article');
    card.className = 'blog-card';

    var thumbWrap = document.createElement('div');
    thumbWrap.className = 'blog-thumb-wrap';

    if (post.image) {
      var img = document.createElement('img');
      img.className = 'blog-thumb';
      img.src = post.image;
      img.alt = post.title;
      img.loading = 'lazy';
      img.onerror = function () {
        thumbWrap.innerHTML = '<span class="blog-thumb-placeholder">📰</span>';
      };
      thumbWrap.appendChild(img);
    } else {
      thumbWrap.innerHTML = '<span class="blog-thumb-placeholder">📰</span>';
    }

    var body = document.createElement('div');
    body.className = 'blog-card-body';

    var badgeRow = document.createElement('div');
    badgeRow.className = 'blog-badge-row';
    badgeRow.innerHTML = '<span class="blog-badge">' + (post.category || post.tag || 'Guide') + '</span>' +
                         '<span class="blog-date">' + (post.date || '') + ' · ' + (post.readTime || '5 min read') + '</span>';

    var title = document.createElement('h3');
    title.className = 'blog-card-title';
    title.textContent = post.title;

    var snippet = document.createElement('p');
    snippet.className = 'blog-card-snippet';
    snippet.textContent = post.snippet;

    var footer = document.createElement('div');
    footer.className = 'blog-card-footer';
    footer.innerHTML = '<span>Read Full Guide</span><span>→</span>';

    body.appendChild(badgeRow);
    body.appendChild(title);
    body.appendChild(snippet);
    body.appendChild(footer);

    var targetUrl = post.slug ? '/blog.html?post=' + encodeURIComponent(post.slug) : (post.url || '#');

    var link = document.createElement('a');
    link.href = targetUrl;
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';
    link.appendChild(thumbWrap);
    link.appendChild(body);

    if (window.location.pathname.endsWith('/blog.html') || window.location.pathname === '/blog') {
      link.addEventListener('click', function (e) {
        if (post.slug) {
          e.preventDefault();
          history.pushState(null, '', targetUrl);
          if (typeof window.checkRoute === 'function') {
            window.checkRoute();
          }
        }
      });
    }

    card.appendChild(link);
    return card;
  }

  function initBlogContainer(containerId, limit, filterCategory) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var allPosts = [];
    if (global.WebUtilsBlogData && global.WebUtilsBlogData.getAll) {
      allPosts = global.WebUtilsBlogData.getAll();
    }

    if (filterCategory && filterCategory !== 'all') {
      allPosts = allPosts.filter(function (p) {
        return (p.category || '').toLowerCase() === filterCategory.toLowerCase();
      });
    }

    var count = limit ? Math.min(limit, allPosts.length) : allPosts.length;
    container.innerHTML = '';

    if (count === 0) {
      container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted); font-family: monospace;">No articles found in this category.</div>';
      return;
    }

    for (var i = 0; i < count; i++) {
      container.appendChild(renderPostCard(allPosts[i]));
    }
  }

  function renderFullArticle(post, targetContainer) {
    if (!targetContainer || !post) return;

    var html = `
      <div class="article-reader">
        <a href="/blog.html" class="article-back-link">← Back to All Articles</a>

        <div class="article-hero-header">
          <div class="blog-badge-row" style="margin-bottom: 12px;">
            <span class="blog-badge">${post.category}</span>
            <span class="blog-date">${post.date} · ${post.readTime} · By ${post.author}</span>
          </div>
          <h1 class="article-full-title">${post.title}</h1>
        </div>

        <div class="article-featured-image-wrap">
          <img src="${post.image}" alt="${post.title}" class="article-featured-image" />
        </div>

        <div class="article-tools-box">
          <h4 class="article-tools-heading">⚡ Featured Tools in this Article (1-Click Launch):</h4>
          <div class="article-tools-list">
            ${(post.toolLinks || []).map(function (tl) {
              return `
                <a href="${tl.url}" class="article-tool-pill">
                  <span class="article-tool-name">${tl.name}</span>
                  <span class="article-tool-desc">${tl.desc}</span>
                  <span class="article-tool-arrow">Launch →</span>
                </a>
              `;
            }).join('')}
          </div>
        </div>

        <div class="article-body-prose">
          ${post.content}
        </div>

        <div class="article-footer-cta">
          <h3>Explore 1,000+ Free Online Tools</h3>
          <p>WebUtils provides 100% client-side privacy, instant conversions, and zero software installations.</p>
          <a href="/" class="btn-primary" style="display: inline-flex; margin-top: 12px;">Browse All Tools →</a>
        </div>
      </div>
    `;

    targetContainer.innerHTML = html;
  }

  global.WebUtilsBlog = {
    init: initBlogContainer,
    renderFullArticle: renderFullArticle
  };

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('blog-posts-container');
    if (container) {
      var limit = container.dataset.limit ? parseInt(container.dataset.limit, 10) : 6;
      initBlogContainer('blog-posts-container', limit);
    }
  });
})(window);
