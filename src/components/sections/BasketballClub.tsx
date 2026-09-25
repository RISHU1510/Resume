import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  MapPin,
  Clock,
  Sparkles,
  Users,
  ShieldCheck,
  CheckCircle2,
  LogIn,
  UserPlus,
  LogOut,
  Dumbbell,
  Droplets,
  Lightbulb,
  Car,
  AlertCircle,
  Database,
  Calendar,
  Award,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import {
  clubSignUp,
  clubSignIn,
  clubSignOut,
  getActiveClubSession,
  ClubMember,
} from '../../lib/supabase';

export const BasketballClub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>('register');
  const [currentUser, setCurrentUser] = useState<ClubMember | null>(null);

  // Form states
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('Point Guard');
  const [phone, setPhone] = useState('');

  // UI state
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [rsvpd, setRsvpd] = useState(false);

  useEffect(() => {
    const session = getActiveClubSession();
    if (session) {
      setCurrentUser(session);
    }
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!username.trim() || !password.trim()) {
      setErrorMsg('Please provide both username and password.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);
    const res = await clubSignUp({
      username: username.trim(),
      password,
      fullName: fullName.trim() || username.trim(),
      email: email.trim() || undefined,
      phone: phone.trim() || undefined,
      preferredPosition: position,
    });
    setLoading(false);

    if (res.success && res.member) {
      setCurrentUser(res.member);
      setSuccessMsg(`Welcome to Sector 106 Hoops Club, ${res.member.fullName}! Your player profile is active.`);
      setUsername('');
      setPassword('');
      setFullName('');
      setEmail('');
      setPhone('');
    } else {
      setErrorMsg(res.message || 'Registration failed. Please try again.');
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!username.trim() || !password.trim()) {
      setErrorMsg('Please enter your username and password.');
      return;
    }

    setLoading(true);
    const res = await clubSignIn({
      usernameOrEmail: username.trim(),
      password,
    });
    setLoading(false);

    if (res.success && res.member) {
      setCurrentUser(res.member);
      setSuccessMsg(`Welcome back to the court, ${res.member.fullName}!`);
      setUsername('');
      setPassword('');
    } else {
      setErrorMsg(res.message || 'Sign in failed. Check your username/password.');
    }
  };

  const handleSignOut = async () => {
    await clubSignOut();
    setCurrentUser(null);
    setSuccessMsg('You have signed out of your player account.');
    setRsvpd(false);
  };

  const amenities = [
    {
      icon: Lightbulb,
      title: 'High-Lumen Floodlights',
      desc: 'Powerful evening & night court lighting for late pickups.',
    },
    {
      icon: Car,
      title: 'Conscient Mall Parking',
      desc: 'Hassle-free parking right next to the court premises.',
    },
    {
      icon: Droplets,
      title: 'Hydration & Water Station',
      desc: 'Chilled drinking water and recovery area for all players.',
    },
    {
      icon: Dumbbell,
      title: 'Gear & Balls Provided',
      desc: 'Wilson / Spalding official regulation basketballs & cones.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Maintained Court',
      desc: 'Smooth high-traction surface with regulation rims and nets.',
    },
    {
      icon: Users,
      title: 'Restrooms & Wash Area',
      desc: 'Accessible clean amenities located within mall walking distance.',
    },
  ];

  return (
    <section id="basketball-club" className="relative py-28 bg-[#0a0908] text-[#f7f4ed] overflow-hidden border-t border-[#f7f4ed]/5">
      {/* Background Court Line Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <circle cx="600" cy="400" r="180" stroke="#f7f4ed" strokeWidth="2" />
          <path d="M 600,0 L 600,800" stroke="#f7f4ed" strokeWidth="2" />
          <path d="M 0,200 L 300,200 A 200,200 0 0,1 300,600 L 0,600" stroke="#f7f4ed" strokeWidth="2" />
          <path d="M 1200,200 L 900,200 A 200,200 0 0,0 900,600 L 1200,600" stroke="#f7f4ed" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeading
          number="12"
          tagline="COMMUNITY HOOPS & PICKUP RECREATION"
          title="Sector 106 Basketball Club"
          description="Beyond algorithms and data models, basketball is where I reset my mind. We run regular scrimmages, shootarounds, and friendly competitive pickup games in Gurgaon Sector 106 right by Conscient One Mall."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: About the Club, Court Location & Amenities (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Player Bio & Culture Card */}
            <div className="p-7 rounded-lg bg-[#141210] border border-[#f7f4ed]/10 relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#881337] uppercase tracking-wider">
                  <Activity className="w-4 h-4" />
                  <span>On-Court Profile • Point Guard / Shooter</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#881337]/20 text-[#f7f4ed] border border-[#881337]/30">
                  Open to All Players
                </span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#f7f4ed] font-light leading-snug">
                "Basketball is fast-twitch pattern recognition in motion."
              </h3>
              <p className="mt-3 text-sm text-[#bbb5a7] leading-relaxed">
                Whether you want casual shooting drills after work, 3v3 half-court battles, or high-intensity weekend 5v5 runs, our Gurgaon pickup circle welcomes everyone who loves the game. All amenities are set up so you just bring your shoes and energy.
              </p>

              {/* Location Badge */}
              <div className="mt-6 p-4 rounded bg-[#1c1917] border border-[#f7f4ed]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#881337]/20 text-[#881337] mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#881337] tracking-wider">Court Location</div>
                    <div className="font-medium text-sm text-[#f7f4ed] mt-0.5">Gurgaon Sector 106</div>
                    <div className="text-xs text-[#bbb5a7]">Right adjacent to Conscient One Mall Parking</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#bbb5a7] bg-[#0a0908] px-3 py-2 rounded border border-[#f7f4ed]/5">
                  <Clock className="w-3.5 h-3.5 text-[#881337]" />
                  <span>Evenings 6:30 PM & Weekend Mornings</span>
                </div>
              </div>
            </div>

            {/* Court Amenities Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-serif-display text-lg text-[#f7f4ed]">Court Amenities & Facilities</h4>
                <span className="text-xs font-mono text-[#bbb5a7]">Fully Equipped</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-[#141210] border border-[#f7f4ed]/5 hover:border-[#881337]/30 transition-colors flex items-start gap-3"
                    >
                      <div className="p-2 rounded bg-[#1c1917] text-[#881337] border border-[#f7f4ed]/5 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#f7f4ed]">{item.title}</div>
                        <div className="text-[11px] text-[#bbb5a7] mt-0.5 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Community Roster & Security Note */}
            <div className="p-4 rounded bg-[#11100e] border border-[#f7f4ed]/5 flex items-start gap-3">
              <Database className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
              <div className="text-xs text-[#bbb5a7] leading-relaxed">
                <span className="font-mono text-[#f7f4ed] font-semibold">Community Roster & Verification: </span>
                <span>
                  Player accounts, weekend scrimmage RSVPs, and digital court passes are automatically maintained with instant verified session state.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Registration & Sign In Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-lg bg-[#141210] border border-[#881337]/30 shadow-xl relative">
              {/* If user is already authenticated */}
              {currentUser ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#f7f4ed]/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#881337] flex items-center justify-center text-white font-mono font-bold text-sm">
                        {currentUser.fullName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#f7f4ed]">{currentUser.fullName}</div>
                        <div className="text-xs font-mono text-[#881337]">@{currentUser.username}</div>
                      </div>
                    </div>

                    <button
                      onClick={handleSignOut}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1c1917] border border-[#f7f4ed]/10 hover:border-red-500/40 text-xs font-mono text-[#bbb5a7] hover:text-red-300 transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>

                  {/* Player Digital Pass Card */}
                  <div className="p-5 rounded-lg bg-gradient-to-br from-[#1c1917] to-[#12100f] border border-[#881337]/40 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-[#881337] tracking-wider">
                        Sector 106 Player Pass
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{currentUser.status}</span>
                      </span>
                    </div>

                    <div className="mt-4 font-serif-display text-xl text-[#f7f4ed]">{currentUser.fullName}</div>
                    <div className="text-xs text-[#bbb5a7] mt-0.5">Position: {currentUser.preferredPosition || 'Point Guard'}</div>

                    <div className="mt-4 pt-3 border-t border-[#f7f4ed]/10 flex justify-between items-center text-[11px] font-mono text-[#bbb5a7]">
                      <span>Court: Conscient 106</span>
                      <span>Joined: {currentUser.registeredAt}</span>
                    </div>
                  </div>

                  {/* Upcoming Session RSVP */}
                  <div className="p-4 rounded bg-[#1c1917] border border-[#f7f4ed]/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#f7f4ed] font-medium">
                      <Calendar className="w-4 h-4 text-[#881337]" />
                      <span>Next Pickup Run: Saturday 7:00 AM</span>
                    </div>
                    <p className="text-xs text-[#bbb5a7] mt-1.5">
                      Sector 106 Court (Conscient Mall Parking). 5v5 full court game. Balls and water provided.
                    </p>

                    <button
                      onClick={() => setRsvpd(!rsvpd)}
                      className={`mt-3 w-full py-2 px-4 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                        rsvpd
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                          : 'bg-[#881337] hover:bg-[#9f1239] text-white shadow-md'
                      }`}
                    >
                      {rsvpd ? '✓ RSVP Confirmed (See you on court!)' : 'RSVP For Next Session'}
                    </button>
                  </div>

                  <div className="text-center text-[11px] font-mono text-[#bbb5a7]">
                    Need directions or team details? WhatsApp coordinator or find Rishu on court!
                  </div>
                </div>
              ) : (
                <div>
                  {/* Auth Switcher Tabs */}
                  <div className="grid grid-cols-2 p-1 rounded bg-[#1c1917] border border-[#f7f4ed]/5 mb-6">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('register');
                        setErrorMsg('');
                        setSuccessMsg('');
                      }}
                      className={`py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 ${
                        activeTab === 'register'
                          ? 'bg-[#881337] text-white font-semibold'
                          : 'text-[#bbb5a7] hover:text-[#f7f4ed]'
                      }`}
                    >
                      <UserPlus className="w-3.5 h-3.5" />
                      <span>Register / Join</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('signin');
                        setErrorMsg('');
                        setSuccessMsg('');
                      }}
                      className={`py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 ${
                        activeTab === 'signin'
                          ? 'bg-[#881337] text-white font-semibold'
                          : 'text-[#bbb5a7] hover:text-[#f7f4ed]'
                      }`}
                    >
                      <LogIn className="w-3.5 h-3.5" />
                      <span>Member Sign In</span>
                    </button>
                  </div>

                  {/* Header info */}
                  <div className="mb-5">
                    <h4 className="font-serif-display text-xl text-[#f7f4ed]">
                      {activeTab === 'register' ? 'Join the Basketball Club' : 'Welcome Back, Hooper'}
                    </h4>
                    <p className="text-xs text-[#bbb5a7] mt-1">
                      {activeTab === 'register'
                        ? 'Create your player profile with username & password to join Sector 106 sessions.'
                        : 'Sign in to access your player pass and RSVP for upcoming games.'}
                    </p>
                  </div>

                  {/* Feedback Messages */}
                  {errorMsg && (
                    <div className="mb-4 p-3 rounded bg-red-950/60 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {successMsg && (
                    <div className="mb-4 p-3 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{successMsg}</span>
                    </div>
                  )}

                  {/* FORM */}
                  <form onSubmit={activeTab === 'register' ? handleRegister : handleSignIn} className="space-y-4">
                    {/* Username */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#bbb5a7] mb-1">
                        Username <span className="text-[#881337]">*</span>
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="e.g. court_vision_9"
                        className="w-full px-3 py-2 rounded bg-[#1c1917] border border-[#f7f4ed]/10 text-sm text-[#f7f4ed] placeholder-[#bbb5a7]/40 focus:outline-none focus:border-[#881337] font-mono"
                        required
                      />
                    </div>

                    {/* Registration only fields */}
                    {activeTab === 'register' && (
                      <>
                        <div>
                          <label className="block text-[11px] font-mono uppercase text-[#bbb5a7] mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Arjun Mehta"
                            className="w-full px-3 py-2 rounded bg-[#1c1917] border border-[#f7f4ed]/10 text-sm text-[#f7f4ed] placeholder-[#bbb5a7]/40 focus:outline-none focus:border-[#881337]"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-mono uppercase text-[#bbb5a7] mb-1">
                              Preferred Position
                            </label>
                            <select
                              value={position}
                              onChange={(e) => setPosition(e.target.value)}
                              className="w-full px-2.5 py-2 rounded bg-[#1c1917] border border-[#f7f4ed]/10 text-xs text-[#f7f4ed] focus:outline-none focus:border-[#881337] font-mono"
                            >
                              <option value="Point Guard">Point Guard</option>
                              <option value="Shooting Guard">Shooting Guard</option>
                              <option value="Small Forward">Small Forward</option>
                              <option value="Power Forward">Power Forward</option>
                              <option value="Center">Center</option>
                              <option value="Casual / All-Around">Casual All-Around</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[11px] font-mono uppercase text-[#bbb5a7] mb-1">
                              Phone / WhatsApp
                            </label>
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+91 98..."
                              className="w-full px-3 py-2 rounded bg-[#1c1917] border border-[#f7f4ed]/10 text-xs text-[#f7f4ed] placeholder-[#bbb5a7]/40 focus:outline-none focus:border-[#881337] font-mono"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Password */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#bbb5a7] mb-1">
                        Password <span className="text-[#881337]">*</span>
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-3 py-2 rounded bg-[#1c1917] border border-[#f7f4ed]/10 text-sm text-[#f7f4ed] placeholder-[#bbb5a7]/40 focus:outline-none focus:border-[#881337] font-mono"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      data-cursor="SUBMIT"
                      className="w-full py-2.5 px-4 rounded bg-[#881337] hover:bg-[#9f1239] disabled:opacity-50 text-white font-mono text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#881337]/20 flex items-center justify-center gap-2 mt-2"
                    >
                      {loading ? (
                        <span>Processing...</span>
                      ) : activeTab === 'register' ? (
                        <>
                          <UserPlus className="w-4 h-4" />
                          <span>Register Player Profile</span>
                        </>
                      ) : (
                        <>
                          <LogIn className="w-4 h-4" />
                          <span>Sign In to Court</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Switch prompt */}
                  <div className="mt-5 text-center text-xs text-[#bbb5a7]">
                    {activeTab === 'register' ? (
                      <span>
                        Already registered?{' '}
                        <button
                          type="button"
                          onClick={() => setActiveTab('signin')}
                          className="text-[#881337] hover:underline font-mono ml-1"
                        >
                          Sign In here
                        </button>
                      </span>
                    ) : (
                      <span>
                        New to Sector 106 court?{' '}
                        <button
                          type="button"
                          onClick={() => setActiveTab('register')}
                          className="text-[#881337] hover:underline font-mono ml-1"
                        >
                          Create Player Account
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
