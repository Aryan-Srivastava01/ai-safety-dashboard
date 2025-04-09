import React, { useState } from 'react';
import './Dashboard.css';

interface Incident {
  id: number;
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
  reported_at: string;
  showDetails?: boolean;
}

const initialIncidents: Incident[] = [
  {
    id: 1,
    title: 'Biased Recommendation Algorithm',
    description: 'Algorithm consistently favored certain demographics...',
    severity: 'Medium',
    reported_at: '2025-03-15T10:00:00Z',
  },
  {
    id: 2,
    title: 'LLM Hallucination in Critical Info',
    description: 'LLM provided incorrect safety procedure information...',
    severity: 'High',
    reported_at: '2025-04-01T14:30:00Z',
  },
  {
    id: 3,
    title: 'Minor Data Leak via Chatbot',
    description: 'Chatbot inadvertently exposed non-sensitive user metadata...',
    severity: 'Low',
    reported_at: '2025-03-20T09:15:00Z',
  },
];

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState<string>('All');
  const [dateSort, setDateSort] = useState<string>('newest');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Low');

  const filteredIncidents = incidents
    .filter((incident) =>
      severityFilter === 'All' ? true : incident.severity === severityFilter
    )
    .sort((a, b) => {
      const d1 = new Date(a.reported_at).getTime();
      const d2 = new Date(b.reported_at).getTime();
      return dateSort === 'newest' ? d2 - d1 : d1 - d2;
    });

  const toggleDetails = (id: number) => {
    setIncidents((prev) =>
      prev.map((incident) =>
        incident.id === id
          ? { ...incident, showDetails: !incident.showDetails }
          : incident
      )
    );
  };

  const handleSubmit = () => {
    if (!title || !description) {
      alert('Please fill in all fields.');
      return;
    }
    const newIncident: Incident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };
    setIncidents([newIncident, ...incidents]);
    setTitle('');
    setDescription('');
    setSeverity('Low');
  };

  return (
    <div className="dashboard">
      <h1>AI Safety Incident Dashboard</h1>

      <div className="controls">
        <label>
          Filter Severity:
          <select value={severityFilter} onChange={(e) => setSeverityFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label>
          Sort by Date:
          <select value={dateSort} onChange={(e) => setDateSort(e.target.value)}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </label>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select value={severity} onChange={(e) => setSeverity(e.target.value as 'Low' | 'Medium' | 'High')}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={handleSubmit}>Report New Incident</button>
      </div>

      <div className="incident-list">
        {filteredIncidents.map((incident) => (
          <div key={incident.id} className="incident">
            <strong>{incident.title}</strong><br />
            <em>Severity:</em> {incident.severity} | <em>Reported:</em>{' '}
            {new Date(incident.reported_at).toLocaleDateString()}<br />
            <button onClick={() => toggleDetails(incident.id)}>
              {incident.showDetails ? 'Hide' : 'View'} Details
            </button>
            {incident.showDetails && <div className="details">{incident.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
