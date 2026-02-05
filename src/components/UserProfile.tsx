import React, { useState } from 'react';
import { LogOut, User, Mail, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface UserProfileProps {
  onAuthClick: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onAuthClick }) => {
  const { user, userProfile, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!user || !userProfile) {
    return (
      <button
        onClick={onAuthClick}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors font-semibold border border-red-500/50"
      >
        <LogIn className="h-5 w-5" />
        <span>Sign In</span>
      </button>
    );
  }

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
      setIsOpen(false);
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-white transition-colors border border-red-500/50"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
          {userProfile.avatar_url ? (
            <img
              src={userProfile.avatar_url}
              alt={userProfile.name || 'User'}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <User className="h-4 w-4" />
          )}
        </div>
        <span className="hidden sm:inline text-sm font-medium">{userProfile.name || 'User'}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-black/95 border border-red-500/30 rounded-lg shadow-2xl z-50 backdrop-blur-sm">
          <div className="p-4">
            <div className="flex items-center space-x-3 pb-4 border-b border-red-500/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                {userProfile.avatar_url ? (
                  <img
                    src={userProfile.avatar_url}
                    alt={userProfile.name || 'User'}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="h-6 w-6" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">{userProfile.name || 'User'}</p>
                <p className="text-xs text-gray-400 truncate">{userProfile.email}</p>
              </div>
            </div>

            <div className="space-y-3 py-4 border-b border-red-500/20">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="truncate">{userProfile.email}</span>
              </div>
              <div className="text-xs text-gray-400">
                Logged in with <span className="capitalize font-semibold text-red-400">{userProfile.provider}</span>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              disabled={isLoading}
              className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 disabled:bg-gray-600/20 text-red-400 hover:text-red-300 disabled:text-gray-400 transition-colors rounded-lg border border-red-500/50 disabled:border-gray-500/50 disabled:cursor-not-allowed font-medium text-sm"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-400"></div>
                  <span>Signing out...</span>
                </>
              ) : (
                <>
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;
