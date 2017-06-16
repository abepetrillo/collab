class RoomsController < ApplicationController
  include TwilioClient

  def create
    twilio_video_access_token(identity: params["identity"], room: params["room"])
  end

  def twilio_video_access_token(identity:, room:)
    token = Twilio::Util::AccessToken.new(ENV.fetch('TWILIO_ACCOUNT'), ENV.fetch('TWILIO_AUTH'), identity)
    grant = Twilio::JWT::AccessToken::VideoGrant.new
    grant.room = 'DailyStandup'
    token.add_grant(grant)
    token.to_jwt
  end
end
