window.CHAPTERS = [
  {
    "id": 1,
    "title": "What is Observability?",
    "analogy": "Car Dashboard",
    "emoji": "\ud83d\ude97",
    "desc": "You don't drive by opening hood every second. You look at dashboard \u2014 speed, fuel, temperature. Observability is dashboard for your servers.",
    "content": "<p><strong>Three pillars:</strong> Metrics (numbers), Logs (diary), Traces (journey map). Grafana shows all three.</p><ul><li>Metrics: How many requests? CPU?</li><li>Logs: What happened?</li><li>Traces: Where did request go?</li></ul>"
  },
  {
    "id": 2,
    "title": "Grafana vs Prometheus vs Loki",
    "analogy": "TV vs Meter vs Diary",
    "emoji": "\ud83d\udcfa",
    "desc": "Prometheus collects numbers (meter). Loki collects logs (diary). Grafana shows both on TV wall.",
    "content": "<p><strong>Prometheus</strong> = time-series DB + scraper. <strong>Loki</strong> = logs. <strong>Grafana</strong> = visualization layer that talks to both.</p>"
  },
  {
    "id": 3,
    "title": "Installing Grafana",
    "analogy": "First TV Setup",
    "emoji": "\ud83d\udd27",
    "desc": "Install via Docker, binary, or Helm. Get first login.",
    "content": "<div class='code-block'><pre>docker run -d -p 3000:3000 --name grafana grafana/grafana-oss\n# open http://localhost:3000  admin/admin</pre></div>"
  },
  {
    "id": 4,
    "title": "Data Sources",
    "analogy": "Connecting Power Plants",
    "emoji": "\ud83d\udd0c",
    "desc": "Data Source = where Grafana fetches data. Like plugging TV to different power plants.",
    "content": "<div class='code-block'><pre>Add Data Source: Prometheus URL http://prometheus:9090\nTest & Save -> Explore to query: up</pre></div>"
  },
  {
    "id": 5,
    "title": "Panels \u2014 Your First Screen",
    "analogy": "Single TV Screen",
    "emoji": "\ud83d\udcca",
    "desc": "Panel = one chart. Types: Time series, Stat, Gauge, Table, Bar.",
    "content": "<p>Create Panel \u2192 Choose visualization \u2192 Write PromQL: <code>rate(http_requests_total[5m])</code></p>"
  },
  {
    "id": 6,
    "title": "Dashboards \u2014 The Wall",
    "analogy": "Wall of TVs",
    "emoji": "\ud83e\uddf1",
    "desc": "Dashboard = collection of panels telling story of one service.",
    "content": "<p>Best practice: One dashboard per service, 5-8 panels max. Row for RED metrics: Rate, Errors, Duration.</p>"
  },
  {
    "id": 7,
    "title": "Transformations & Overrides",
    "analogy": "Make Data Pretty",
    "emoji": "\ud83c\udfa8",
    "desc": "Transform raw numbers into human-friendly. Overrides = special makeup for one panel.",
    "content": "<p>Add transformation: Add field from calculation, Organize fields. Override: Change unit to percent, color thresholds.</p>"
  },
  {
    "id": 8,
    "title": "Variables & Templating",
    "analogy": "Remote Control",
    "emoji": "\ud83c\udf9b\ufe0f",
    "desc": "Variable = dropdown to switch server/env without editing dashboard.",
    "content": "<div class='code-block'><pre>Variable: Query type, Data source: Prometheus, Query: label_values(up, instance)\nUse in panel: up{instance=\"$server\"}</pre></div>"
  },
  {
    "id": 9,
    "title": "Alerts \u2014 Smoke Alarms",
    "analogy": "Smoke Alarm",
    "emoji": "\ud83d\udea8",
    "desc": "Alert = if metric crosses threshold, shout via Slack, email, PagerDuty.",
    "content": "<div class='code-block'><pre>Alert rule: WHEN avg() OF A IS ABOVE 80 FOR 5m\nContact point: Slack webhook</pre></div>"
  },
  {
    "id": 10,
    "title": "Annotations & Links",
    "analogy": "Sticky Notes",
    "emoji": "\ud83d\udccc",
    "desc": "Annotation = vertical line marking deployment. Links = jump to logs.",
    "content": "<p>Add annotation data source \u2192 show deploys on graph. Panel link \u2192 to Loki logs.</p>"
  },
  {
    "id": 11,
    "title": "Explore & Loki",
    "analogy": "Magnifying Glass",
    "emoji": "\ud83d\udd0d",
    "desc": "Explore = quick investigation. Loki = logs like Prometheus for metrics.",
    "content": "<div class='code-block'><pre>{job=\"myapp\"} |= \"error\"\nRate query: rate({job=\"myapp\"}[5m])</pre></div>"
  },
  {
    "id": 12,
    "title": "Provisioning \u2014 Dashboards as Code",
    "analogy": "House Blueprint",
    "emoji": "\ud83d\udcd0",
    "desc": "Don't click to create. Write YAML, auto-load dashboards on startup.",
    "content": "<div class='code-block'><pre>provisioning/dashboards/dashboards.yaml\nprovisioning/datasources/datasource.yaml\nDashboard JSON in /var/lib/grafana/dashboards</pre></div>"
  },
  {
    "id": 13,
    "title": "Folders, RBAC & Teams",
    "analogy": "Who Sees What",
    "emoji": "\ud83d\udc65",
    "desc": "Folders organize, RBAC controls who can view/edit.",
    "content": "<p>Team A sees prod, Team B dev. Viewer vs Editor vs Admin.</p>"
  },
  {
    "id": 14,
    "title": "Real Stack: Prometheus + Node Exporter + K8s",
    "analogy": "Full Power Plant Setup",
    "emoji": "\ud83c\udfed",
    "desc": "Deploy Node Exporter, Prometheus scrapes, Grafana shows CPU, memory, K8s pods.",
    "content": "<div class='code-block'><pre>PromQL: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode=\"idle\"}[5m])) * 100)\nMemory: node_memory_MemAvailable_bytes</pre></div>"
  },
  {
    "id": 15,
    "title": "Best Practices & Capstone",
    "analogy": "Production Wall",
    "emoji": "\ud83c\udfc6",
    "desc": "Capstone: Build production wall with 3 data sources, variables, alerts, provisioning, SLOs.",
    "content": "<p><strong>Capstone checklist:</strong> Dashboard with RED, USE method, variables for cluster/namespace, alert to Slack, provisioned via YAML, versioned in Git.</p><ul><li>One dashboard = one story</li><li>Use template variables</li><li>Alert on symptoms not causes</li></ul>"
  }
];