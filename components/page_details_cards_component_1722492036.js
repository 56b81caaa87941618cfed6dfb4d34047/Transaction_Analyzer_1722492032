/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1722492036", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-gradient-to-br from-pink-400 to-purple-600">
        <h2 id="details-title" class="text-2xl font-bold mb-8 pl-4 text-white">Details</h2>
        <ul id="details-list" class="grid gap-6 min-[480px]:grid-cols-3 text-sm px-4">
            <li id="project-length" class="px-6 py-5 rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
                <div class="font-semibold text-xl text-white mb-2">Real-Time Transaction Monitoring</div>
                <div class="text-pink-100">Gain insights into your transactional data as it happens with our powerful real-time monitoring and analysis tools.</div>
            </li>
            <li id="start-date" class="px-6 py-5 rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
                <div class="font-semibold text-xl text-white mb-2" id="start-date-des-1">Customizable Alerts and Notifications</div>
                <time class="text-pink-100" id="start-time-des-1">Set up custom alerts to be notified of important events or anomalies in your transactional data streams.</time>
            </li>
            <li id="end-date" class="px-6 py-5 rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
                <div class="font-semibold text-xl text-white mb-2" id="end-date-des-1">Integrated Data Visualization</div>
                <time class="text-pink-100" id="end-time-des-1">Explore your transactional data through intuitive dashboards and visual analytics for deeper insights.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

