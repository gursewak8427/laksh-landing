import mixpanel from 'mixpanel-browser';

const TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;

mixpanel.init(TOKEN, {
  track_pageview: false, // we fire it manually
  persistence: 'localStorage',
});

// Super properties auto-attached to every event
try {
  mixpanel.register({ platform: 'web', app: 'laksh_landing' });
} catch (_) { /* ignore */ }

// ── helpers ──────────────────────────────────────────────────────────────────

export function trackPageViewed() {
  mixpanel.track('laksh_page_viewed', {
    url: window.location.href,
    referrer: document.referrer || 'direct',
  });
}

export function trackCtaClicked(location) {
  mixpanel.track('laksh_cta_clicked', { location });
}

export function trackModalOpened() {
  mixpanel.track('laksh_waitlist_modal_opened');
}

export function trackWelcomeShown() {
  mixpanel.track('laksh_welcome_shown');
}

export function trackWelcomeAction(action) {
  // action: 'cta' | 'dismiss'
  mixpanel.track('laksh_welcome_action', { action });
}

export function trackWaitlistSubmitted(name, exam) {
  mixpanel.track('laksh_waitlist_submitted', { name, exam });
}

export function trackWaitlistError(message) {
  mixpanel.track('laksh_waitlist_error', { error: message });
}

// ── identify: call after successful signup ────────────────────────────────────
// phone is the stable ID (unique per user).
// alias() links the anonymous distinct_id → phone so all prior anonymous
// events merge onto the identified profile.
export function identifyUser(phone, name, exam) {
  const userId = `+91${phone}`;

  // alias merges the anonymous session into the identified user (call once)
  try { mixpanel.alias(userId); } catch (_) {}

  mixpanel.identify(userId);

  mixpanel.people.set({
    $name: name,
    $phone: userId,
    exam,
    source: 'laksh_landing',
    signed_up_at: new Date().toISOString(),
  });
}
