const analytics = {
  sendEvent: function sendEvent(eventName, eventProperties) {
    console.log("analytics 1️⃣", { eventName, eventProperties });
  },
};

export default analytics;
