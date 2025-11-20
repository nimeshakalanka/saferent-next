import { Search, MessageCircle, CreditCard, Package } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How SafeRent Works
          </h1>
          <p className="text-gray-400 text-lg">
            Renting and listing items is simple and secure
          </p>
        </div>

        <div className="space-y-16">
          <StepCard
            number={1}
            icon={Search}
            title="Browse & Search"
            description="Find the perfect item from our extensive catalog. Use filters to narrow down your search by category, price, and location."
          />
          <StepCard
            number={2}
            icon={MessageCircle}
            title="Contact Owner"
            description="Message the item owner directly to discuss availability, pickup details, and any special requirements."
          />
          <StepCard
            number={3}
            icon={CreditCard}
            title="Secure Payment"
            description="Pay securely through our platform. Your payment is protected until you confirm receipt of the item."
          />
          <StepCard
            number={4}
            icon={Package}
            title="Pickup & Return"
            description="Pick up the item at the agreed time and location. Return it on time to maintain your good renter rating."
          />
        </div>
      </div>
    </div>
  );
}

function StepCard({ number, icon: Icon, title, description }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="text-purple-400" size={24} />
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}