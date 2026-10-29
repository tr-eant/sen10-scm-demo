/**
 * Unit tests for the stampBuildTimestamp page-load function.
 *
 * To demonstrate a FAILING test, change the expected substring below
 * from 'Page loaded on:' to something wrong like 'WRONG PREFIX'.
 * Revert it back to 'Page loaded on:' for the PASSING test.
 */
const { stampBuildTimestamp } = require('../public/pageLoad');

describe('stampBuildTimestamp', () => {
  beforeEach(() => {
    // Set up the DOM element the function targets
    document.body.innerHTML = '<footer id="build-stamp"></footer>';
  });

  test('writes a timestamp string into the #build-stamp element', () => {
    const result = stampBuildTimestamp();
    const el = document.getElementById('build-stamp');

    // The stamp should start with the expected prefix
    expect(result).toContain('Page loaded on:');
    expect(el.textContent).toBe(result);
  });

  test('returns null when the target element is missing', () => {
    document.body.innerHTML = '';               // no #build-stamp
    const result = stampBuildTimestamp();
    expect(result).toBeNull();
  });
});
