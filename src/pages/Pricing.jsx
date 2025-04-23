import React from 'react';

const pricingPlans = [
    {
        title: 'Free Plan',
        price: '$0',
        subtitle: 'To kickstart your projects, no credit card required.',
        features: [
        '10 projects',
        '0.5 GB storage',
        '190 compute hours',
        'Autoscaling up to 2 CU',
        'Read replicas',
        'Built-in high availability',
        ],
        cta: 'Start for free',
        highlight: false,
    },
    {
        title: 'Launch',
        price: '$19',
        subtitle: 'The resources, features, and support you need to launch.',
        features: [
        '100 projects',
        '10 GB storage',
        '300 compute hours',
        'Autoscaling up to 4 CU',
        'Everything in Free, plus...',
        'Organization accounts',
        'Standard Support',
        ],
        cta: 'Get started',
        highlight: true,
    },
    {
        title: 'Scale',
        price: '$69',
        subtitle: 'More capacity and functionality for scaling production workloads.',
        features: [
        '1000 projects',
        '50 GB storage',
        '750 compute hours',
        'Autoscaling up to 8 CU',
        'Everything in Launch, plus...',
        'IP Allow Rules',
        'Datadog integration',
        ],
        cta: 'Get started',
        highlight: false,
    },
    {
        title: 'Business',
        price: '$700',
        subtitle: 'For larger workloads, with best compliance and security.',
        features: [
        '5,000 projects',
        '500 GB storage',
        '1000 compute hours',
        'Autoscaling up to 16+ CU',
        'Everything in Scale, plus...',
        'SOC 2, HIPAA (upon request)',
        '0-downtime migrations',
        'Private Link',
        'And more...',
        ],
        cta: 'Get started',
        highlight: false,
    },
    ];

const Pricing = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white py-20 px-6">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-mono">Neon Pricing</h1>
            <p className="text-gray-400 font-mono mt-2">Pricing plans that grow with you. From prototype to Enterprise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, idx) => (
            <div
                key={idx}
                className={`rounded-md p-8 border ${
                    plan.highlight ? 'bg-[#0f0f0f]' : 'bg-[#0a0a0a]'
                    } border-gray-700 hover:border-green-500
                    flex flex-col justify-between shadow-md transition duration-300`}
            >
                <div>
                <h3 className="text-xl font-mono mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}<span className="text-base font-normal">/month</span></div>
                <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>
                <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <span className="text-green-400 mr-2">✔</span>
                        {feature}
                    </li>
                    ))}
                </ul>
                </div>
                <button
                className={`mt-8 py-2 rounded-sm font-mono text-sm ${
                    plan.highlight
                    ? 'bg-green-500 hover:bg-green-600 text-black'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
                >
                {plan.cta}
                </button>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Pricing;
