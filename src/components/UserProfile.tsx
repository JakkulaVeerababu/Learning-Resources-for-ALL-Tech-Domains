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
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent bg-accent-hover text-accent-text transition-colors font-semibold border-accent"
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
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary hover:bg-tertiary text-primary transition-colors border border-default"
      >
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          {userProfile.avatar_url ? (
            <img
              src={userProfile.avatar_url}
              alt={userProfile.name || 'User'}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <User className="h-4 w-4 text-accent-text" />
          )}
        </div>
        <span className="hidden sm:inline text-sm font-medium">{userProfile.name || 'User'}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-card border border-default rounded-lg shadow-xl z-50">
          <div className="p-4">
            <div className="flex items-center space-x-3 pb-4 border-b border-default">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                {userProfile.avatar_url ? (
                  <img
                    src={userProfile.avatar_url}
                    alt={userProfile.name || 'User'}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="h-6 w-6 text-accent-text" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-primary truncate">{userProfile.name || 'User'}</p>
                <p className="text-xs text-secondary truncate">{userProfile.email}</p>
              </div>
            </div>

            <div className="space-y-3 py-4 border-b border-default">
              <div className="flex items-center space-x-2 text-sm text-secondary">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="truncate">{userProfile.email}</span>
              </div>
              <div className="text-xs text-secondary">
                Logged in with <span className="capitalize font-semibold text-primary">{userProfile.provider}</span>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              disabled={isLoading}
              className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-secondary hover:bg-tertiary disabled:opacity-50 text-primary transition-colors rounded-lg border border-default font-medium text-sm"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
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
