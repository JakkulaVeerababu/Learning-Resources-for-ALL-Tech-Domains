import React, { useState } from 'react';
import { X, Github, Mail, Linkedin, Facebook, Eye, EyeOff, AlertCircle, Loader } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { signUpWithEmail, signInWithEmail, signInWithOAuth } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      if (isLogin) {
        await signInWithEmail(formData.email, formData.password);
        setSuccessMessage('Signed in successfully!');
        setTimeout(() => {
          onClose();
          setSuccessMessage('');
        }, 1500);
      } else {
        await signUpWithEmail(formData.email, formData.password, formData.name);
        setSuccessMessage('Account created! A confirmation email has been sent.');
        setTimeout(() => {
          onClose();
          setSuccessMessage('');
        }, 2000);
      }
    } catch (error: any) {
      setErrors({ form: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github' | 'facebook' | 'linkedin') => {
    setIsLoading(true);
    try {
      await signInWithOAuth(provider);
    } catch (error: any) {
      setErrors({ form: error.message });
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-default rounded-2xl shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">
              {isLogin ? 'Welcome Back' : 'Join Us Today'}
            </h2>
            <p className="text-secondary">
              {isLogin ? 'Sign in to access premium features' : 'Create your account to get started'}
            </p>
          </div>

          {successMessage && (
            <div className="mb-6 p-4 bg-secondary border border-default rounded-lg text-primary text-sm">
              {successMessage}
            </div>
          )}

          {errors.form && (
            <div className="mb-6 flex items-center space-x-2 p-4 bg-secondary border border-default rounded-lg text-primary text-sm">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{errors.form}</span>
            </div>
          )}

          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-3 bg-accent bg-accent-hover disabled:opacity-50 text-accent-text py-3 rounded-lg transition-colors font-semibold border-accent disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader className="h-5 w-5 animate-spin" /> : <Mail className="h-5 w-5" />}
              <span>Continue with Google</span>
            </button>

            <button
              onClick={() => handleSocialLogin('github')}
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-3 bg-secondary hover:bg-tertiary disabled:opacity-50 text-primary py-3 rounded-lg transition-colors font-semibold border border-default disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader className="h-5 w-5 animate-spin" /> : <Github className="h-5 w-5" />}
              <span>Continue with GitHub</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSocialLogin('linkedin')}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-tertiary disabled:opacity-50 text-primary py-3 rounded-lg transition-colors border border-default disabled:cursor-not-allowed font-semibold"
              >
                {isLoading ? <Loader className="h-5 w-5 animate-spin" /> : <Linkedin className="h-5 w-5" />}
                <span className="hidden sm:inline text-sm">LinkedIn</span>
              </button>

              <button
                onClick={() => handleSocialLogin('facebook')}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-tertiary disabled:opacity-50 text-primary py-3 rounded-lg transition-colors border border-default disabled:cursor-not-allowed font-semibold"
              >
                {isLoading ? <Loader className="h-5 w-5 animate-spin" /> : <Facebook className="h-5 w-5" />}
                <span className="hidden sm:inline text-sm">Facebook</span>
              </button>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-default"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-secondary">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className={`w-full px-4 py-3 bg-input border rounded-lg text-primary placeholder:text-tertiary focus:outline-none focus:border-hover transition-all ${errors.name ? 'border-primary' : 'border-default'}`}
                />
                {errors.name && (
                  <div className="flex items-center mt-1 text-primary text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </div>
                )}
              </div>
            )}

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className={`w-full px-4 py-3 bg-input border rounded-lg text-primary placeholder:text-tertiary focus:outline-none focus:border-hover transition-all ${errors.email ? 'border-primary' : 'border-default'}`}
              />
              {errors.email && (
                <div className="flex items-center mt-1 text-primary text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email}
                </div>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`w-full px-4 py-3 bg-input border rounded-lg text-primary placeholder:text-tertiary focus:outline-none focus:border-hover transition-all pr-12 ${errors.password ? 'border-primary' : 'border-default'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary hover:text-primary"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
              {errors.password && (
                <div className="flex items-center mt-1 text-primary text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.password}
                </div>
              )}
            </div>

            {!isLogin && (
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className={`w-full px-4 py-3 bg-input border rounded-lg text-primary placeholder:text-tertiary focus:outline-none focus:border-hover transition-all ${errors.confirmPassword ? 'border-primary' : 'border-default'}`}
                />
                {errors.confirmPassword && (
                  <div className="flex items-center mt-1 text-primary text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent bg-accent-hover disabled:opacity-50 text-accent-text py-3 rounded-lg font-semibold transition-all disabled:cursor-not-allowed flex items-center justify-center space-x-2 border-accent"
            >
              {isLoading ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
              }}
              className="text-primary hover:text-secondary font-medium"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
