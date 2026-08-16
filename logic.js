"use strict";

// Kleine, pure toestandskern voor de conceptdemo. Zowel app.js als validate.mjs
// gebruiken deze functies, zodat de belangrijkste berichtstatussen uitvoerbaar
// getest worden zonder framework of browserpackage.
(function exposeHotspotLogic(global) {
  function createConversation(targetMakerId, message, context = {}) {
    if (!targetMakerId || String(message).trim().length < 2) {
      throw new Error("Kies een ontvanger en schrijf een bericht.");
    }
    return {
      targetMakerId,
      callId: context.callId || null,
      sourceType: context.sourceType || "profile",
      sourceId: context.sourceId || targetMakerId,
      sourceLabel: context.sourceLabel || "Makersprofiel",
      motivation: String(message).trim(),
      status: "open",
      chatOpen: true,
      muted: false,
    };
  }

  function blockConversation(conversation) {
    if (!conversation) return null;
    return {
      ...conversation,
      status: "blocked",
      chatOpen: false,
    };
  }

  global.HotspotLogic = Object.freeze({
    createConversation,
    blockConversation,
  });
})(globalThis);
